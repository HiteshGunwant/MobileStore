import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { getMobileList } from '../../Actions';
import { connect } from 'react-redux'
import Style from './HomePage.style'
import PhoneListContainer from "../PhoneListContainer/PhoneListContainer"
class HomePage extends React.Component {
  state = {
    q: "",
    page: 1,
    limit: 2,
    pages: 1,
    data: [],
  };

  handleLoadMore = () => {
    const { pages, page } = this.state
    if (pages >= page) {
      this.setState({ page: page + 1, isLoadMore: true }, () => {

        this._fetchUser();
      })
    }
  };

  _fetchUser() {
    let { limit, page, q } = this.state
    let req = {
      limit,
      page,
      q
    }
    this.props.getMobileList(req)
  }

  onChange = (val) => {
    this.setState({
      q: val,
      page: 1,
    }, () => {
      this._fetchUser()
    })
  }

  static getDerivedStateFromProps(props, state) {
    let { mobileData } = props.mobileData
    let { data, page, recentRec } = state


    if (mobileData && mobileData.docs && mobileData.docs && mobileData.docs != recentRec) {
      const { docs } = mobileData

      return {
        data: page == 1 ? docs : [...data, ...docs],
        pages: mobileData.pages,
        recentRec: docs,
      }
    }
    return null
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this._fetchUser()
  };

  render() {
    let { data, q, pages, page } = this.state
    let { err, loading } = this.props.mobileData
    return (
      <View style={Style.wrapper}>
        <View style={Style.inputContainer}>
          <TextInput
            style={Style.input}
            onChangeText={(text) => this.onChange(text)}
            placeholder={"Search"}
            value={q}
          />
        </View>
        <View style={Style.listcontainer}>
          {loading ?
            <View style={Style.footorcomponent}>
              <ActivityIndicator color={"red"} size={"large"} />
            </View> :
            data && data.length ?
              <FlatList
                data={data}
                extraData={this.state}
                renderItem={({ item, i }) =>
                  <PhoneListContainer data={item} key={i} />
                }
                contentContainerStyle={{ marginBottom: "40%" }}
                keyExtractor={i => i.name}
                ListFooterComponent={() => {

                  if (err)
                    return <View style={Style.flatlistComponent}>
                      <Text onPress={() => this._fetchUser()}>Netowrk Req failed Retry</Text>
                    </View>
                  else if (page < pages)
                    return <View style={Style.flatlistComponent}>
                      <Text onPress={this.handleLoadMore}>Load More</Text>
                    </View>
                  else return null
                }
                }
              /> :
              <View style={Style.footorcomponent}>
                {err ?
                  <Text onPress={() => this._fetchUser()}>Netowrk Req failed click to retry</Text>
                  :
                  <Text>Sorry No Mobile found</Text>
                }
              </View>
          }
        </View>
      </View>
    )
  }

}



const mapStateToProps = (state) => ({
  mobileData: state.MobileListReducer,

})

const mapDispatchToProps = {
  getMobileList: getMobileList,

};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
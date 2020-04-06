import React from "react";
import {connect} from 'react-redux'
import { fetchSwapiAction, updateUrlDetailAction } from '../../redux/action';

class StarWars extends React.Component {

    componentDidMount() {
        //fetch API
        this.props.fetchSwapiAction()
    }

    selectProfile = (urlDetail) => {
        this.props.updateUrlDetailAction(urlDetail)
    }

    render() {
        const { loadingProfile, selectedProfile } = this.props
        return(
            <React.Fragment>
                <div>
                    Detail {loadingProfile ? '...Loading': selectedProfile}
                </div>
                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name: </th>
                                            <th>height: </th>
                                            <th>Detail: </th>
                                        </tr>
                                    </thead>
                {
                    this.props.swapiData.map(data => {
                        return (
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>{data.name}</p>
                                            </td>
                                            <td>
                                                <p>{data.height}</p>
                                            </td>
                                            <td>
                                                <button onClick={()=> this.selectProfile(data.url)}>Detail</button>
                                            </td>
                                        </tr>
                                    </tbody>
                        )
                    })
                }
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    swapiData: state.swapiData.data,
    loadingProfile: state.selectedProfile.loading,
    // urlDetail: state.selectProfile.urlDetail
})

const mapDispatchToProps = {
    fetchSwapiAction,
    updateUrlDetailAction
  }

  export default connect (mapStateToProps, mapDispatchToProps)(StarWars)
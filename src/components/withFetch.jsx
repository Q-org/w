import React from 'react'

const withFetch = (Component, url) => {

    // console.log(url)
    return class withFetchC extends Component {
        state = {
            data: []
        }
        async componentDidMount() {
            const res = await fetch(url)
            let data = res.json(res.json)
            this.setState([...data])
        }
        render() {
            return (
                <Component {...this.props} data={this.state.data} />
            )
        }
    }


}

export default withFetch
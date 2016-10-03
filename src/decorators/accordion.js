/**
 * Created by diana.kanatova on 03.10.2016.
 */
import React, {Component} from "react";

export default function accordion(ComponentToRender) {
    return class Accordion extends Component {
        state = {
            openedArticleId: null
        }

        toggleOpen = artId => ev => {
            const {openedArticleId} = this.state;
            this.setState({
                openedArticleId: openedArticleId == artId ? null : artId
            })
        }

        render() {
            return <ComponentToRender {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
        }
    }
}
import React from 'react';
import { Component } from 'react';
import images from './images';

class Image extends Component {
    constructor() {
        super();
        this.state = {
            curImg: 'https://picsum.photos/id/10/2500/1667'
        };
    }

   
    render() {

        return (
            <>

                

                <div className="mainImg">
                    <img src={this.state.curImg} style={{ height: '400px', width: '500px' }} />
                </div>

           


                <div className="thumbs">
                    {
                        images.map(images => {
                            return <img onClick={(e) => this.setState({ curImg: images.url })}
                                src={images.url}
                                style={{ cursor: 'pointer', height: '140px', width: '140px' }} />
                        }
                        )
                    }
                </div>

            </>
        );
    }
}
export default Image;
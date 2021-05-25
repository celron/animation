import React, {PureComponent} from 'react'
import {Animate} from 'react-move'
import {easeExpOut} from 'd3-ease'
import logo from './savills-square.png';
import nyc from './The_5_Boroughs_of_New_York_City.svg';
import './Simple.css';

const trackStyles = {
    borderRadius: 4,
    position: 'relative',
    margin: '5px 3px 10px',
    width: '100%',
    height: '100%',

}

const hsize = 100;

class Sample extends PureComponent {
    state = {
        open: false,
        fadeIn: 'map_start'
    }

    handleClick = () => {
        this.setState({open: !this.state.open,
            fadeIn: this.state.open?'fade-in-text':'map_start',
        })
    }

    render() {
        return (
            <div style={{height: '100%', width: '100%', display: 'block', position: 'fixed'}}>
                <button
                    onClick={this.handleClick}
                >
                    Toggle
                </button>
                <Animate
                    start={() => ({
                        x: hsize / 2,
                        scale: 2,
                        o: 0,
                        tr: 0,
                    })}
                    update={() => ({
                        x: [this.state.open ? hsize / 2 : 0],
                        scale: [this.state.open ? 2 : 0.5],
                        o: [this.state.open ? 0 : 1],
                        tr: [this.state.open ? -200: -500],
                        timing: {duration: 750, ease: easeExpOut},
                    })}
                >
                    {(state) => {
                        const {x, scale, o, tr} = state
                        return (
                            <div style={trackStyles}>
                                <div
                                    className='logoContainer'
                                    style={{
                                        WebkitTransform: `translate3d(${x}vw, ${x}vh, 0) scale(${scale})`,
                                        transform: `translate3d(${x}vw, ${x}vh, 0) scale(${scale})`,
                                    }}
                                >
                                    <div className='logo'
                                         style={{
                                             /*backgroundColor: '#ff69b4', */
                                             backgroundImage: `url(${logo})`,
                                         }}></div>
                                </div>
                                <div className= {`map`}
                                style={{
                                    opacity: `${o}`,
                                    backgroundPosition: `0 ${tr}%`,
                                }}/>
                            </div>
                        )
                    }}
                </Animate>
            </div>
        )
    }
}

export default Sample

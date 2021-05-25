import React, { PureComponent } from 'react'
import { Animate } from 'react-move'
import { easeExpOut } from 'd3-ease'

const trackStyles = {
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
    margin: '5px 3px 10px',
    width: '100%',
    height: '100%',

}

const hsize=100;

class Sample extends PureComponent {
    state = {
        open: false,
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div style={{height: '100%',width: '100%', display: 'block', position: 'fixed'}}>
                <button
                    onClick={this.handleClick}
                >
                    Toggle
                </button>
                <Animate
                    start={() => ({
                        x: hsize/2,
                        scale: 1,
                    })}
                    update={() => ({
                        x: [this.state.open ? hsize/2 : 0],
                        scale: [this.state.open ? 1: 0.5],
                        timing: { duration: 750, ease: easeExpOut },
                    })}
                >
                    {(state) => {
                        const { x,scale } = state

                        return (
                            <div style={trackStyles}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        borderRadius: 4,
                                        opacity: 0.7,
                                        WebkitTransform: `translate3d(${x}vw, ${x}vh, 0) scale(${scale})`,
                                        transitionDuration: `1s`,
                                        transform: `translate3d(${x}vw, ${x}vh, 0) scale(${scale})`,
                                        transitionTimingFunction: `cubic-bezier(0.25,0.1,0.25,1)`
                                    }}
                                >
                                    <div style={{
                                        position: 'relative',
                                        left: '-50%',
                                        top: '-75px',
                                        width: 150,
                                        height: 150,
                                        backgroundColor: '#ff69b4',
                                    }}></div>
                                </div>
                            </div>
                        )
                    }}
                </Animate>
            </div>
        )
    }
}

export default Sample

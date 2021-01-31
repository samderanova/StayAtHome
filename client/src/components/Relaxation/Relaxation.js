import React from 'react'
import './Relaxation.css'
import fox from './animal-967657_1920.jpg'
import breakfast from './breakfast-690128_1920.jpg'
import coffee from './coffee-3120750_1920.jpg'
import hedgehog from './hedgehog-468228_1920.jpg'

export default class Relaxation extends React.Component {
    constructor() {
        super()
        this.state = {
            pics: [
                <img src={fox} width='50%' height='50%' />,
                <img src={breakfast} width='50%' height='50%' />,
                <img src={coffee} width='50%' height='50%' />,
                <img src={hedgehog} width='50%' height='50%' />
            ],
            counter: 0
        }
        this.updateLeftPic = this.updateLeftPic.bind(this)
        this.updateRightPic = this.updateRightPic.bind(this)
    }
    updateLeftPic() {
        console.log(this.state.counter)
        this.setState(prevState => {
            var newSlideNo = prevState.counter - 1
            if (newSlideNo < 0) {
                newSlideNo = 3
            }
            return {counter: newSlideNo}
        })
    }
    updateRightPic() {
        this.setState(prevState => {
            var newSlideNo = prevState.counter + 1
            if (newSlideNo > 3) {
                newSlideNo = 0
            }
            return {counter: newSlideNo}
        })
    }
    render() {
        return (
            <div className="Relaxation">
                <h1>Maybe some pictures to help calm you down?</h1>
                <div className="pictures">
                    {this.state.pics[this.state.counter]}
                </div>
                <div className="arrows">
                    <span onClick={() => this.updateLeftPic()}>{'<'}</span>
                    <span onClick={() => this.updateRightPic()}>{'>'}</span>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Jumbo from '../components/Jumbo';
import SelectDetail from '../components/SelectDetail';

class Reservation extends React.Component {
    componentDidMount() {
        //const { location} = this.props;
        // if (location.state === undefined) {  //새로고침 할때,
        //     console.log(this.props);
        //     //history.goBack();
        //     //history.push("/");
        // }
        //새로고침시 생기는 문제 : 현재 location의 state가 존재하지 않는다(원래는 이전페이지에서 state를 넘겨주었다)
        //따라서 이를 토대로 사이트를 구성하는 것이 불가능함
        //나의 대충 solution : 사이트 pathname에다가 시설물 이름을 전달해주고, Reservation.js 실행되면 pathname 가져와서 분리하여 이름 얻어내는 편법
    }
    render() {
        const { location } = this.props;
        const fac_name = location.pathname.split("/")[2];
        return (
            <div>
                <Jumbo text={fac_name} bg_img_src=""></Jumbo>
                <SelectDetail />
            </div>
        );
    }
}

export default Reservation;
import React from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

class SelectDetail extends React.Component {
    render() {
        return (
            <Container fluid>
                <Form>
                    <Form.Label>코트 선택</Form.Label>
                    <ItemOption />
                </Form>
            </Container>
        );
    }
}

/* <Form.Group as={Col} controlId="checkbox-1">
<Form.Check type="checkbox" label="option1" id="checkbox-1" />
</Form.Group>
<Form.Group as={Col} controlId="checkbox-2">
<Form.Check type="checkbox" label="option2" id="checkbox-2" />
</Form.Group>
<Form.Group as={Col} controlId="checkbox-3">
<Form.Check type="checkbox" label="option3" id="checkbox-3" />
</Form.Group> */

export default SelectDetail;

/*주차를 선택할 수 있는 component
날짜는 시스템 날짜 또는 DB 기준 날짜로 받아올 수 있음. 
이후, 날짜와 요일로 계산하여 주차를 얻어낼 수 있음
*/
const toDay = new Date();
function getWeek() {
    var month = toDay.getMonth();
    var week = toDay.getWeek(0);
    return [month, week];
}
//console.log(getWeek());

/*코트를 선택할 수 있는 component */
const court_option = [  //시설에 따라 코트 다르니까 받아오거나 가지고 있어야할거같음.
    1, 2, 3, 4, 5, 6
]
/*form에 대한 처리 방법http://i5on9i.blogspot.com/2015/12/reactjs-checkbox-onchange.html*/
function ItemOption() {
    return (
        <Form.Row>
            {court_option.map((item) => (
                <Form.Group key={item} className="col-4" controlId={`checkbox-${item}`}>
                    <input onChange={inputCheck} type="checkbox" id={`checkbox-${item}`} />
                    <label htmlFor={`checkbox-${item}`}>{`${item}코트`}</label>
                </Form.Group>
            ))}
        </Form.Row>
    );
}
function inputCheck(e) {
    console.log(e.target.value);
}

{/* <Form.Group key={item} className="col-4" controlId={`checkbox-${item}`}>
<Form.Check type="checkbox" label={`${item}코트`} id={`checkbox-${item}`} />
</Form.Group> */}
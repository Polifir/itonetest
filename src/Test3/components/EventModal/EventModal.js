import { Button, Form, Modal, notification } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import EventForm from "../EventForm/EventForm";
import { addEvent, editEvent } from "../../api/calendarApi";

const EventModal = ({ title ,date, initValue}) =>{
    const dispatch = useDispatch()
    const [visivbleModal, setVisibleModal] = useState(false)
    const [form] = Form.useForm()
    const id =  initValue !== undefined ? initValue.id : false;

    const handleCancel = () => {
        setVisibleModal(false);
        form.resetFields();
      };

    const submitForm = () =>{
        form.validateFields().then((values) => {
            const newEvent = {
                date,
                event: {id: id || uuidv4(),
                    title: values.title,
                    startTime: values.startTime.format('HH:mm'),
                    endTime: values.endTime.format('HH:mm'),}
            }
            if(id){
                dispatch(editEvent(newEvent))
            } else{
                dispatch(addEvent(newEvent))
            }
            form.resetFields();
            setVisibleModal(false)

                        
            const notificationTime = dayjs(values.startTime).subtract(10, 'minutes')
            if (notificationTime.isAfter(dayjs())) {
                const timeoutId = setTimeout(() => {
                notification.info({
                    message: 'Напоминание о мероприятие',
                    description: `Через 10 минут начнется событие: ${values.title}`,
                    duration: null,
                })
                }, notificationTime.diff(dayjs()))
                return () => clearTimeout(timeoutId)
            }


  }).catch((e) =>e)      
    }
    return(
        <>
        {!visivbleModal ? <Button onClick={() => setVisibleModal(true)}>{title}</Button> : 
        <Modal title={title} open={visivbleModal} footer={null} onCancel={handleCancel}>
            <EventForm onSubmit={submitForm} form={form} onCancel={handleCancel} initialData={initValue}/>
        </Modal>}
        </>
    )
}

export default EventModal
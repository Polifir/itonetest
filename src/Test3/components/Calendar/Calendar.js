
import { Calendar as AntdCalendar } from 'antd';
import { useNavigate } from 'react-router-dom';
import EventList from '../EventList/EventList';
import { dateFormat } from '../../func/dateFormat';

 const Calendar = () => {
    const navigate = useNavigate();
    const dateClick =(date) =>{
        navigate(`/test3/${dateFormat(date)}`)
    }

  return (
      <AntdCalendar cellRender={(date) => <EventList date={dateFormat(date)} />} onSelect={dateClick} />
  );
};

export default Calendar
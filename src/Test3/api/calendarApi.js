import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  events: [],
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const { date, event } = action.payload
      const existingDate = state.events.find((elem) => elem.date === date)
      if (existingDate) {
        existingDate.events.push(event)
      } else {
        state.events.push({ date, events: [event] })
      }
    },

    deleteEvent: (state, action) => {
      const { date, eventId } = action.payload
      const events = state.events.find((elem) => elem.date === date)

      if (events) {
        events.events = events.events.filter((elem) => elem.id !== eventId)
      }
    },

    editEvent: (state, action) => {
      const { date, event } = action.payload
      const events = state.events.find((elem) => elem.date === date)
      if (events) {
        const eventToEdit = events.events.find((elem) => elem.id === event.id)
        if (eventToEdit) {
          Object.assign(eventToEdit, event)
        }
      }
    },


  },
})


export const { addEvent, deleteEvent, editEvent } = calendarSlice.actions
export const selectCalendarEvents = (state) => state.calendar.events
export default calendarSlice
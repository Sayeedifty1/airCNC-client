// store all the bookings as an object in database post methods

export const addBooking = async (bookingData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
    })
    const data = await response.json()
    return data;
}

// update Room status 
export const updateRoomStatus = async (id, status) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({status})
    })
    const data = await response.json()
    return data;
}

// get all bookings by email
export const getBookings = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
    const data = await response.json()
    return data;
}

// delete a booking
export const deleteBooking = async id => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/bookings/${id}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      }
    )
  
    const data = await response.json()
    return data
  }
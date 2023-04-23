import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://6443d3c5466f7c2b4b5b228b.mockapi.io/api/v1/'
})

type Appointment = {
    patientName: string,
    doctorName: string,
    startDate: string,
    endDate: string
}

Main()

// Appointment yarat
async function AddAppointment(body: Appointment): Promise<Appointment> {
    const createData = await instance.post('Appointment', {
        patientName: body.patientName,
        doctorName: body.doctorName,
        startDate: body.startDate,
        endDate: body.endDate,
    })
    return createData.data
}

// Appointment-i bitir
async function EndAppointment(id: number): Promise<Appointment> {
    const updateData = await instance.put(`Appointment/${id}`, {
        endDate: `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
    })
    return updateData.data

}

// id yə görə appointment-ə bax
async function GetAppointment(id: number): Promise<Appointment> {
    const AppointmentData = await instance.get(`Appointment/${id}`)
    return AppointmentData.data
}

// Bütün appointment-lərə bax
async function GetAllAppointment(): Promise<Appointment[]> {
    const AppointmentData = await instance.get(`Appointment`)
    return AppointmentData.data
}

// Bitməmiş appointmentlərə bax
async function GetAllContinuingAppointments(): Promise<Appointment[]> {
    const AppointmentData = await instance.get('Appointment')
    let date = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
    const activeAppointmentData = AppointmentData.data.filter(e => e.endDate >= new Date())
    return activeAppointmentData
}

// Bugünki appointment-lərə bax
async function GetTodaysAppointments() {
    const AppointmentData = await instance.get('Appointment')
    let todayDate = `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
    const todayAppointmentData = AppointmentData.data.filter(e => e.startDate == todayDate)    
    return todayAppointmentData
}

async function Main() {
    await AddAppointment({ patientName: 'Alijan', doctorName: 'Hekim', startDate: '04-23-2023', endDate: '04-26-2023' })
    await GetAppointment(2)
    await GetAllAppointment()
    await GetAllContinuingAppointments()
    await GetTodaysAppointments()
    await EndAppointment(1)
}
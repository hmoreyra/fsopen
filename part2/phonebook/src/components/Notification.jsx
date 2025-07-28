import './Notification.css'

const Notification = ({notificationInfo}) => {
    if (notificationInfo === null){
        return null
    }

    const notificationType = notificationInfo.isError ? "notification error" : "notification success"

    return (
        <div className={notificationType}>
            {notificationInfo.message}
        </div>
    )
}

export default Notification
import React from 'react'
import styles from '../../../public/css/profile.module.scss'

function Profile() {
    return (
        <div className={styles.Profile}>
            <div className={styles.BackImg}>
                <img src="https://kabekin.com/uploads/converted/15/03/12/2029910762-kabekin.net_1920x1080_-_2022-04-03T123516_.788_-BLBn-1920x1080-MM-100.jpg" alt="" />
            </div>
            <div className={styles.ProfileDiv}>
                <div className={styles.Icon}>
                    <img src="https://play-lh.googleusercontent.com/VkPPNilHH1IzQnBJB1SEwhzt2-tDTBqLihvbsFeITNqX8gMoaKxEkdfCWnlWwmKEFw=w240-h480-rw" alt="" />
                </div>
                <div className={styles.ProfileText}>
                    <div className={styles.Name}>
                        名前
                    </div>
                    <div>
                        いろいろ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

import React from 'react'
import styles from './CohortDetails.module.css'

function CohortDetails({ cohort }) {
  // Ongoing cohorts get green h3, others get blue h3
  const statusClass = cohort.isOngoing ? styles.ongoing : styles.notOngoing

  return (
    <div className={`${styles.box} ${statusClass}`}>
      <h3>{cohort.code}</h3>
      <dl>
        <dt>Cohort Name</dt>
        <dd>{cohort.name}</dd>

        <dt>Technology</dt>
        <dd>{cohort.technology}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>

        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>

        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>

        <dt>Status</dt>
        <dd>{cohort.isOngoing ? '🟢 Ongoing' : '🔵 Completed'}</dd>
      </dl>
    </div>
  )
}

export default CohortDetails

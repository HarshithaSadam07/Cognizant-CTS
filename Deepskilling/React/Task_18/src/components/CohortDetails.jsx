import React from 'react'

function CohortDetails({ cohort }) {
  if (!cohort) return <p>No cohort data provided.</p>

  return (
    <div className="cohort-card" data-testid="cohort-card">
      {/* Cohort code displayed in h3 */}
      <h3 data-testid="cohort-code">{cohort.code}</h3>
      <dl className="cohort-dl">
        <dt>Name</dt>
        <dd data-testid="cohort-name">{cohort.name}</dd>

        <dt>Technology</dt>
        <dd data-testid="cohort-technology">{cohort.technology}</dd>

        <dt>Trainer</dt>
        <dd data-testid="cohort-trainer">{cohort.trainer}</dd>

        <dt>Start Date</dt>
        <dd data-testid="cohort-start">{cohort.startDate}</dd>

        <dt>End Date</dt>
        <dd data-testid="cohort-end">{cohort.endDate}</dd>

        <dt>Status</dt>
        <dd
          data-testid="cohort-status"
          className={cohort.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'}
        >
          {cohort.status}
        </dd>
      </dl>
    </div>
  )
}

export default CohortDetails

import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CohortDetails from './CohortDetails'
import CohortData from '../data/CohortData'

const mockCohort = CohortData[0]

describe('CohortDetails Component', () => {
  // Test 1: should create the component
  it('should create the component', () => {
    const { container } = render(<CohortDetails cohort={mockCohort} />)
    expect(container).toBeTruthy()
  })

  // Test 2: should initialize props
  it('should initialize props correctly', () => {
    render(<CohortDetails cohort={mockCohort} />)
    const card = screen.getByTestId('cohort-card')
    expect(card).toBeInTheDocument()
  })

  // Test 3: should display cohort code in h3
  it('should display cohort code in h3', () => {
    render(<CohortDetails cohort={mockCohort} />)
    const h3 = screen.getByTestId('cohort-code')
    expect(h3.tagName).toBe('H3')
    expect(h3).toHaveTextContent(mockCohort.code)
  })

  // Test 4: should verify other displayed details
  it('should display cohort name', () => {
    render(<CohortDetails cohort={mockCohort} />)
    expect(screen.getByTestId('cohort-name')).toHaveTextContent(mockCohort.name)
  })

  it('should display technology', () => {
    render(<CohortDetails cohort={mockCohort} />)
    expect(screen.getByTestId('cohort-technology')).toHaveTextContent(mockCohort.technology)
  })

  it('should display trainer name', () => {
    render(<CohortDetails cohort={mockCohort} />)
    expect(screen.getByTestId('cohort-trainer')).toHaveTextContent(mockCohort.trainer)
  })

  it('should display start and end dates', () => {
    render(<CohortDetails cohort={mockCohort} />)
    expect(screen.getByTestId('cohort-start')).toHaveTextContent(mockCohort.startDate)
    expect(screen.getByTestId('cohort-end')).toHaveTextContent(mockCohort.endDate)
  })

  it('should display cohort status', () => {
    render(<CohortDetails cohort={mockCohort} />)
    expect(screen.getByTestId('cohort-status')).toHaveTextContent(mockCohort.status)
  })

  // Test 5: snapshot test
  it('should match snapshot', () => {
    const { asFragment } = render(<CohortDetails cohort={mockCohort} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

interface RsvpStatusProps {
  clearFilter?: {
    isShowing: boolean
    handleClick: () => void
  }
  count: number
  disabled?: boolean
  status: 'success' | 'error' | 'warning'
  heading: string
  onClick?: () => void
}

const getButtonClasses = (status: RsvpStatusProps['status']) => {
  if (status === 'success') return 'bg-countyGreen'
  if (status === 'warning') return 'bg-spicyMustard text-white'
  if (status === 'error') return 'bg-cognac'
  return ''
}

const RsvpStatus = ({
  clearFilter,
  count,
  disabled,
  status,
  heading,
  onClick,
}: RsvpStatusProps) => {
  const buttonClasses = getButtonClasses(status)

  return (
    <div
      className={`status-${status} h-[120px] w-full border-[6px] border-white ${
        disabled ? 'opacity-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div className="relative -left-2 -top-14">
          <div className="outline-text number-with-outline relative z-0">
            {count}
          </div>
          <div className="number-with-outline absolute left-0 top-0 z-10">
            {count}
          </div>
        </div>
        <div
          className={`relative pt-10 font-handwriting text-3xl uppercase ${
            status === 'warning' ? 'text-black' : 'text-white'
          }`}
        >
          {clearFilter?.isShowing && (
            <Button
              size="small"
              className={`absolute -top-2 whitespace-nowrap ${buttonClasses}`}
              handleClick={(event) => clearFilter.handleClick(event)}
            >
              <div className="flex items-center gap-1 font-sans">
                <Icon id="close" />
                Clear Filter
              </div>
            </Button>
          )}
          {heading}
        </div>
      </div>
    </div>
  )
}

export default RsvpStatus

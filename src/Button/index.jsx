// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../../node_modules/purecss/build/buttons-core-min.css'
import '../../node_modules/purecss/build/buttons-min.css'
import './button.css'

class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const {
      disabled,
      href,
      children,
      active,
      primary,
      size,
      success,
      error,
      warning,
      secondary,
      custom,
      icon,
      ...props
    } = this.props
    
    let sizeClassName
    if (size) {  
      switch(size) {
      case 'xsmall':
        sizeClassName = 'button-xsmall'
        break
      case 'small':
        sizeClassName = 'button-small'
        break
      case 'large':
        sizeClassName = 'button-large'
        break
      case 'xlarge':
        sizeClassName = 'button-xlarge'
        break
      }
    }

    const style = cn(
      sizeClassName,
      {
        'button-success': success,
        'button-error': error,
        'button-warning': warning,
        'button-secondary': secondary
      },
      'pure-button',
      {
        'pure-button-disabled': disabled,
        'pure-button-active': active,
        'pure-button-primary': primary
      },
      custom
    )

    let iconElement
    if (icon) {
      const iconStyle = cn('icon', icon)
      iconElement = React.createElement('i', { className: iconStyle }, null)
    }

    return React.createElement(
      href ? 'a' : 'button',
      {
        className: style,
        ...props
      },
      iconElement,
      children
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge']),
  success: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  secondary: PropTypes.bool,
  custom: PropTypes.string,
  icon: PropTypes.string,
}

export default Button
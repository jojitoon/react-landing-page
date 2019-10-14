import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './MenuItem.module.scss'

/**
* @author martincserep, zilahir
* @function MenuItem
* */

const MenuItem = props => {
	const { isActive, label, target } = props
	const [hovered, setHovered] = useState(false)
	const toggleHover = () => setHovered(!hovered)

	return (
		<li
			className={`${styles.menuItem} ${isActive ? styles.isActive : ''}`}
			onMouseEnter={() => toggleHover()}
			onMouseLeave={() => toggleHover()}
		>
			<Link to={target}>
				{label}
			</Link>
		</li>
	)
}

MenuItem.defaultProps = {
	isActive: false,
	target: '',
}

MenuItem.propTypes = {
	isActive: PropTypes.bool,
	label: PropTypes.string.isRequired,
	target: PropTypes.string,
}

export default MenuItem

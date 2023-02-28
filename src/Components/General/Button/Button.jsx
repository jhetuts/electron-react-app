const Button = ({ type = 'default', icon = '', text = ''}) => {

    const commonStyles = ''

    const styles = {
        'default': `  ${commonStyles}`,
        'primary': ` ${commonStyles}`
    }

    return <>
        <button className={styles[type]} >
            {text}
        </button>
    </>

}

export default Button
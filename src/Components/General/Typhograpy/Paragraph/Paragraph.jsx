const Icon = ({ type = 'h1', text = ''}) => {

    const commonStyles = ''

    const styles = {
        'default': `  ${commonStyles}`,
        'primary': ` ${commonStyles}`
    }

    switch(type) {
        case 'h2':
            return <>
                <h2 className={styles[type]} >
                    {text}
                </h2>
            </>
        case 'h3':
            return <>
                <h3 className={styles[type]} >
                    {text}
                </h3>
            </>
        case 'h4':
            return <>
                <h4 className={styles[type]} >
                    {text}
                </h4>
            </>
        case 'h5':
            return <>
                <h5 className={styles[type]} >
                    {text}
                </h5>
            </>
        case 'h6':
            return <>
                <h6 className={styles[type]} >
                    {text}
                </h6>
            </>
        default:
            return <>
                <h1 className={styles[type]} >
                    {text}
                </h1>
            </>
    }

}

export default Icon
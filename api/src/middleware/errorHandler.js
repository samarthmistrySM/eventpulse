export const errorHandler = (err, req, res) => {
    console.error('❌ ERROR: ', err)
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'

    return res.status(status).json({
        success: false,
        message,
    })
}
export default errorHandler;

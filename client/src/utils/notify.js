import { createToast, clearToasts } from 'mosha-vue-toastify';

const config = (type) => {

    return {
        type: type || 'default',
        showIcon: true,
        hideProgressBar: false,
        transition: 'zoom',
        position: 'bottom-center',
    }

}

// success
function notifySuccess(message) {
    createToast(message, config('success'))
}

// info
function notifyInfo(message) {
    createToast(message, config('info'))
}

// warning
function notifyWarning(message) {
    notifyClearAll();
    createToast(message, config('warning'))
}

// error
function notifyError(message) {
    createToast(message, config('danger'))
}

// clear all toasts
function notifyClearAll() {
    clearToasts()
}

export { notifySuccess, notifyInfo, notifyWarning, notifyError, notifyClearAll };
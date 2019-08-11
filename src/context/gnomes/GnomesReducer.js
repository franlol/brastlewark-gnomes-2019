import * as actionTypes from './GnomesActions';

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.UPLOAD_GNOMES: {
            return {
                ...state,
                gnomes: payload,
                filter: payload,
            }
        }

        case actionTypes.UPLOAD_ERRORS: {
            return {
                ...state,
                error: {
                    ...payload,
                }
            }
        }

        case actionTypes.UPLOAD_FILTER: {
            return {
                ...state,
                filter: payload,
            }
        }

        case actionTypes.UPLOAD_LOADING: {
            return {
                ...state,
                loading: payload,
            }
        }

        default: {
            return state;
        }
    }

}

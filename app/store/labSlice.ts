import { createSlice } from '@reduxjs/toolkit';
import { Lab, TestMethod } from '../types/Lab';
import { generateFakeLabs } from '../utils/faker';

export const emptyLab: Lab = {
    id: 0,
    labName: '',
    location: '',
    contactPerson: '',
    contactNumber: '',
    servicesOffered: [],
    status: '',
    testMethods: [
        {
            id: 0,
            method: '',
            parameters: [],
            sampleType: ''
        }
    ]
};

export const emptyTestMethod: TestMethod = {
    method: '',
    parameters: [],
    sampleType: ''
};

const labSlice = createSlice({
    name: 'labs',
    initialState: generateFakeLabs(5),
    reducers: {
        addLab: (state, action) => {
            state.push(action.payload);
        },
        updateLab: (state, action) => {
            const index = state.findIndex((lab) => lab.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteLab: (state, action) => {
            return state.filter((lab) => lab.id !== action.payload);
        },
        addTestMethod: (state, action) => {
            const lab = state.find((lab) => lab.id === action.payload.labId);
            if (lab) {
                lab.testMethods.push(action.payload);
            }
        },
        updateTestMethod: (state, action) => {
            const lab = state.find((lab) => lab.id === action.payload.labId);
            if (lab) {
                const methodIndex = lab.testMethods.findIndex((method) => method.id === action.payload.id);
                if (methodIndex !== -1) {
                    lab.testMethods[methodIndex] = action.payload;
                }
            }
        },
        deleteTestMethod: (state, action) => {
            const lab = state.find((lab) => lab.id === action.payload.labId);
            if (lab) {
                lab.testMethods = lab.testMethods.filter((method) => method.id !== action.payload.id);
            }
        }
    },
});

export const { addLab, updateLab, deleteLab, deleteTestMethod, addTestMethod, updateTestMethod } = labSlice.actions;
export default labSlice.reducer;

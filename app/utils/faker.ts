import { faker } from '@faker-js/faker';
import { Lab, TestMethod } from '../types/Lab';

export const parameters = ['Viscosity', 'Temperature', 'Turbidity', 'Hardness', 'Tensile Strength', 'Organic Pollutants'];

const generateFakeTestMethod = (id: number): TestMethod => ({
    id: id,
    method: faker.helpers.arrayElement(['ASTM D445', 'ISO 7027', 'ISO 9001', 'EPA 8270D']),
    parameters: faker.helpers.arrayElements(parameters, 2),
    sampleType: faker.helpers.arrayElement(['Oil', 'Water', 'Metal', 'Air']),
});

const generateFakeLab = (id: number): Lab => ({
    id,
    labName: `Viswa Lab ${faker.location.city()}`,
    location: faker.location.city(),
    contactPerson: faker.person.firstName(),
    contactNumber: faker.phone.number(),
    servicesOffered: faker.helpers.arrayElements(['Chemical Analysis', 'Oil Testing', 'Water Quality', 'Material Testing', 'Environmental Testing'], 3),
    status: faker.helpers.arrayElement(['Active', 'Inactive']),
    testMethods: Array.from({ length: 2 }, (_, index) => generateFakeTestMethod(index + 1)),
});

export const generateFakeLabs = (count: number): Lab[] => Array.from({ length: count }, (_, index) => generateFakeLab(index + 1));
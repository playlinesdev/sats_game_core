import { Mock } from "moq.ts"
import { ILandPlotTypeRepository } from '../land-plot-type.repository.interface'

const createDto = { name: 'Plains' }
const updateDto = { name: 'plains' }
const searchDto1 = { _id: '1' }
const searchDto2 = { name: 'pl' }
const found1 = { _id: '1', name: 'Plains' }
const landType1 = { _id: '1', name: 'Plains' }
const landTypeMod1 = { _id: '1', name: 'plains' }
const landType2 = { _id: '2', name: 'plateau' }
const landType3 = { _id: '3', name: 'mountains' }
const list1 = [landType1, landType2, landType3]

const mock = new Mock<ILandPlotTypeRepository>()
    .setup(instance => instance.create(createDto)).returnsAsync(landType1)
    .setup(instance => instance.findOne(searchDto1)).returnsAsync(found1)
    .setup(instance => instance.findMany(searchDto2)).returnsAsync(list1)
    .setup(instance => instance.update('1', updateDto)).returnsAsync(landTypeMod1)
    .setup(instance => instance.deleteById('1')).returnsAsync(true)
    .setup(instance => instance.deleteById('5')).returnsAsync(false)
    .setup(instance => instance.deleteByQuery(searchDto2)).returnsAsync(true)

describe('Should correctly call repository create method', () => {
    let repository: ILandPlotTypeRepository

    beforeEach(() => {
        repository = mock.object()
    })

    test('Should correctly create a land plot type', async () => {
        let result = await repository.create(createDto)
        expect(result).toBe(landType1)
    })

    test('Should correctly find plot type using dto', async () => {
        let result1 = await repository.findOne(searchDto1)
        expect(result1).toMatchObject({ _id: '1', name: 'Plains' })

        let result2 = await repository.findMany(searchDto2)
        expect(result2.length).toBe(3)
        expect(result2[2].name).toBe('mountains')
    })

    test('Should correctly update a land plot type', async () => {
        let result = await repository.update('1', updateDto)
        expect(result).toMatchObject({ _id: '1', name: 'plains' })
    })


    test('Should correctly delete land plot types', async () => {
        let result1 = await repository.deleteById('1')
        expect(result1).toBeTruthy()

        let result2 = await repository.deleteById('5')
        expect(result2).toBeFalsy()

        let result3 = await repository.deleteByQuery(searchDto2);
        expect(result3).toBeTruthy()
    })
})
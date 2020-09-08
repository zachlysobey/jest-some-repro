export default class BusinessLogic {
    average(nums: number[]) {
        return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
    }
}

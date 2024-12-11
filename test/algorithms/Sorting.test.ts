import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sorting", function () {
  it("Should sort array correctly", async function () {
    const Sorting = await ethers.getContractFactory("Sorting");
    const sorting = await Sorting.deploy();
    await sorting.waitForDeployment();

    const unsorted = [64, 34, 25, 12, 22, 11, 90];
    const sorted = await sorting.bubbleSort(unsorted);
    expect(sorted).to.deep.equal([11, 12, 22, 25, 34, 64, 90]);
  });
});

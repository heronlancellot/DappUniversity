const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ID = 1
const NAME = "Shoes"
const CATEGORY = "Clothing"
const IMAGE = ""
const COST = tokens(1)
const RATING = 4
const STOCK = 5

describe("Dappazon", () => {
    let dappazon
    let deployer, buyer

    beforeEach(async () => {

      [deployer, buyer] = await ethers.getSigners()

      // Deploy Contract
      const Dappazon = await ethers.getContractFactory("Dappazon")
      dappazon = await Dappazon.deploy()
    })

    describe("Deployment", () => {

      it('Sets the owner', async () => {
        expect(await dappazon.owner()).to.equal(deployer.address);
      })
    })

    describe("Listing", () => {
      let transaction

      
      beforeEach( async () => {
        transaction = await dappazon.connect(deployer).list(
          ID,
          NAME,
          CATEGORY,
          IMAGE,
          COST,
          RATING,
          STOCK          
        )
          
        await transaction.wait()
      })

      it('Returns item attributes', async () => {
        const item = await dappazon.items(ID)
        expect(item.id).to.equal(ID)
        expect(item.name).to.equal(NAME)
        expect(item.category).to.equal(CATEGORY)
        expect(item.image).to.equal(IMAGE)
        expect(item.cost).to.equal(COST)
        expect(item.rating).to.equal(RATING)
        expect(item.stock).to.equal(STOCK)
      })

      it("Emits list event", () => {
        expect(transaction).to.emit(dappazon, "List")
      })
    })


})

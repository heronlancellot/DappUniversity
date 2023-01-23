// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {

    address public owner;

    struct Item {
        uint256 id;
        string name;
        string category;
        string image;
        uint256 cost;
        uint256 rating;
        uint256 stock;
    }

    mapping(uint256 => Item) public items;

    event List(string name, uint256 cost, uint256 quantity);

    // Custom Modifier ( Modifier to implement in the function, In this case will be the only owner)
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    // List Products
    function list(
        uint256 _id, 
        string memory _name, 
        string memory _category,
        string memory _image,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
        ) public onlyOwner {

            // Create Item Struct
            Item memory item = Item(
                _id, 
                _name, 
                _category, 
                _image, 
                _cost, 
                _rating, 
                _stock 
            );

            // Save Item struct to blockchain
            items[_id] = item;

            //Emit an event
            emit List(_name, _cost, _stock);

        }

    // Buy Products
    function buy(uint256 _id) public {
        // Receiver Crypto
        

        // Create an order

        // Substrack stock

        // Emit event
    }

    // Withdraw Funds

}

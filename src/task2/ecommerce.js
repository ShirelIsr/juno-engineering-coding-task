////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api/index.mjs";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const fetchAllOrders = async () => {
    const ids = allIds;
   // let orders
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work
    // as efficient and clean as possible.
    if (ids.length==0) return null;
    const orderMap =new Map();
    for(let id of ids)
    {
        orderMap.set(id,await fetchOrderById(id));
    }
    return orderMap;

    
};

const bucketOrdersByUsers = async () => {
    let ordersByUsers = {};
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
    const orderMap=await fetchAllOrders();
    if(orderMap==null) return null;
    for (let [key, value] of orderMap) {
        if(!ordersByUsers[value.userId]) {
            ordersByUsers[value.userId]=[];//open new array for user Id
        }
        ordersByUsers[value.userId].push(value);//ENTER THE ORDER
        }
        return ordersByUsers;
};

const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
    const orderMap=await fetchAllOrders();
    let last2WeeksOrders=[];
    for (let [key, value] of orderMap)
    {
        if(value.timestamp>=new Date(Date.now()-14*24*60*1000))
        {
            last2WeeksOrders.push(value);   
        }

    }
    return last2WeeksOrders;

};

const bucketOrdersByDate = async () => {
    let ordersByDate = {};
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
    //As I understand it, the order list must be taken from function 3
    let last2WeeksOrders=await getLast2WeeksOrders();
    for (let order of last2WeeksOrders){
        var day=new Date(order.timestamp).getDate();
        if(!ordersByDate[day]){
            ordersByDate[day]=[];
            console.log(order);
        }
        ordersByDate[day].push(order);
    }
    return ordersByDate;
};

fetchAllOrders()
.then(console.log)

bucketOrdersByUsers()
 .then(console.log);

getLast2WeeksOrders()
 .then(console.log);

bucketOrdersByDate()
 .then(console.log);

////////////////////////////////////////

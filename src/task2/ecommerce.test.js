import { fetchOrderById, Ids} from "../api";
const ORDER_ID = "70ef599e5eca171b2bce84d1"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();
});

const ORDER_ID2 = "70ef599e5eca171b2bce84c9"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID2);
    expect(orders).toBeTruthy();
});

const ORDER_ID3 = ""
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID2);
    expect(orders).toBeNull();
});

const ORDER_UID = "-LsGiUmkDUBm9KzpWk58"
test("Ecommerce - bucketOrdersByUsers", async () => {
    let orders = await bucketOrdersByUsers(ORDER_UID);
    expect(orders).toBeNull();
});

test("Ecommerce - fetchAllOrders", async () => {
    let orders = await fetchAllOrders(Ids);
    expect(orders).toBeNull();
});

test("Ecommerce - fetchAllOrders", async () => {
    let orders = await fetchAllOrders();
    expect(orders).toBeNull();
});

test("Ecommerce - fetchAllOrders", async () => {
    let orders = await fetchAllOrders();
    expect(orders).toBeNull();
});



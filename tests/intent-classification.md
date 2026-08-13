# Intent Classification Test Cases

## ORDER_STATUS Tests

| Test ID | Customer Message | Expected Intent |
|---|---|---|
| TC01 | Where is my order? | ORDER_STATUS |
| TC02 | Has ORD1001 shipped? | ORDER_STATUS |
| TC03 | When will my package arrive? | ORDER_STATUS |
| TC04 | Can you track ORD1002? | ORDER_STATUS |
| TC05 | Is my order on the way? | ORDER_STATUS |

## RETURNS_REFUNDS Tests

| Test ID | Customer Message | Expected Intent |
|---|---|---|
| TC06 | Can I return my shoes? | RETURNS_REFUNDS |
| TC07 | How long do I have to return something? | RETURNS_REFUNDS |
| TC08 | When will I get my refund? | RETURNS_REFUNDS |
| TC09 | How do I return an item? | RETURNS_REFUNDS |
| TC10 | What is your return policy? | RETURNS_REFUNDS |

## UNSUPPORTED Tests

| Test ID | Customer Message | Expected Intent |
|---|---|---|
| TC11 | What is the weather today? | UNSUPPORTED |
| TC12 | Tell me a joke. | UNSUPPORTED |
| TC13 | Do you sell laptops? | UNSUPPORTED |
| TC14 | Help me change my password. | UNSUPPORTED |
| TC15 | What is your company address? | UNSUPPORTED |

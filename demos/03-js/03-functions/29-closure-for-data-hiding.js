/**
 * Create a function that creates person objects. A person object should have access to
 * - name -> public
 * - paymentModes: [
 *      { type: 'cc', value: '1234-5678-1234-5678' },
 *      { ... }
 *   ] -> private
 * - addPaymentModes( type, value ) -> public
 * - printPaymentModes() -> public
 * - getPaymentDetails( type ) -> public - it searches through payment modes and returns the details of payment mode with matching type ('cc', 'debit' etc.)
 */

// arr.push({
//     type: type,
//     value: value
// })
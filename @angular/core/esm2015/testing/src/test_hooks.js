/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Public Test Library for unit testing Angular applications. Assumes that you are running
 * with Jasmine, Mocha, or a similar framework which exports a beforeEach function and
 * allows tests to be asynchronous by either returning a promise or using a 'done' parameter.
 */
import { resetFakeAsyncZone } from './fake_async';
import { TestBed } from './test_bed';
const _global = (typeof window === 'undefined' ? global : window);
// Reset the test providers and the fake async zone before each test.
if (_global.beforeEach) {
    _global.beforeEach(getCleanupHook(false));
}
// We provide both a `beforeEach` and `afterEach`, because the updated behavior for
// tearing down the module is supposed to run after the test so that we can associate
// teardown errors with the correct test.
if (_global.afterEach) {
    _global.afterEach(getCleanupHook(true));
}
function getCleanupHook(expectedTeardownValue) {
    return () => {
        if (TestBed.shouldTearDownTestingModule() ===
            expectedTeardownValue) {
            TestBed.resetTestingModule();
            resetFakeAsyncZone();
        }
    };
}
/**
 * This API should be removed. But doing so seems to break `google3` and so it requires a bit of
 * investigation.
 *
 * A work around is to mark it as `@codeGenApi` for now and investigate later.
 *
 * @codeGenApi
 */
// TODO(iminar): Remove this code in a safe way.
export const __core_private_testing_placeholder__ = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9ob29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvdGVzdF9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBRUgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQXVDLE1BQU0sWUFBWSxDQUFDO0FBSXpFLE1BQU0sT0FBTyxHQUFRLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXZFLHFFQUFxRTtBQUNyRSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDdEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUMzQztBQUVELG1GQUFtRjtBQUNuRixxRkFBcUY7QUFDckYseUNBQXlDO0FBQ3pDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ3pDO0FBRUQsU0FBUyxjQUFjLENBQUMscUJBQThCO0lBQ3BELE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSyxPQUFzQyxDQUFDLDJCQUEyQixFQUFFO1lBQ3JFLHFCQUFxQixFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzdCLGtCQUFrQixFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILGdEQUFnRDtBQUNoRCxNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBQdWJsaWMgVGVzdCBMaWJyYXJ5IGZvciB1bml0IHRlc3RpbmcgQW5ndWxhciBhcHBsaWNhdGlvbnMuIEFzc3VtZXMgdGhhdCB5b3UgYXJlIHJ1bm5pbmdcbiAqIHdpdGggSmFzbWluZSwgTW9jaGEsIG9yIGEgc2ltaWxhciBmcmFtZXdvcmsgd2hpY2ggZXhwb3J0cyBhIGJlZm9yZUVhY2ggZnVuY3Rpb24gYW5kXG4gKiBhbGxvd3MgdGVzdHMgdG8gYmUgYXN5bmNocm9ub3VzIGJ5IGVpdGhlciByZXR1cm5pbmcgYSBwcm9taXNlIG9yIHVzaW5nIGEgJ2RvbmUnIHBhcmFtZXRlci5cbiAqL1xuXG5pbXBvcnQge3Jlc2V0RmFrZUFzeW5jWm9uZX0gZnJvbSAnLi9mYWtlX2FzeW5jJztcbmltcG9ydCB7VGVzdEJlZCwgVGVzdEJlZFZpZXdFbmdpbmUgYXMgVGVzdEJlZEludGVybmFsfSBmcm9tICcuL3Rlc3RfYmVkJztcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmNvbnN0IF9nbG9iYWwgPSA8YW55Pih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyk7XG5cbi8vIFJlc2V0IHRoZSB0ZXN0IHByb3ZpZGVycyBhbmQgdGhlIGZha2UgYXN5bmMgem9uZSBiZWZvcmUgZWFjaCB0ZXN0LlxuaWYgKF9nbG9iYWwuYmVmb3JlRWFjaCkge1xuICBfZ2xvYmFsLmJlZm9yZUVhY2goZ2V0Q2xlYW51cEhvb2soZmFsc2UpKTtcbn1cblxuLy8gV2UgcHJvdmlkZSBib3RoIGEgYGJlZm9yZUVhY2hgIGFuZCBgYWZ0ZXJFYWNoYCwgYmVjYXVzZSB0aGUgdXBkYXRlZCBiZWhhdmlvciBmb3Jcbi8vIHRlYXJpbmcgZG93biB0aGUgbW9kdWxlIGlzIHN1cHBvc2VkIHRvIHJ1biBhZnRlciB0aGUgdGVzdCBzbyB0aGF0IHdlIGNhbiBhc3NvY2lhdGVcbi8vIHRlYXJkb3duIGVycm9ycyB3aXRoIHRoZSBjb3JyZWN0IHRlc3QuXG5pZiAoX2dsb2JhbC5hZnRlckVhY2gpIHtcbiAgX2dsb2JhbC5hZnRlckVhY2goZ2V0Q2xlYW51cEhvb2sodHJ1ZSkpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGVhbnVwSG9vayhleHBlY3RlZFRlYXJkb3duVmFsdWU6IGJvb2xlYW4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoKFRlc3RCZWQgYXMgdW5rbm93biBhcyBUZXN0QmVkSW50ZXJuYWwpLnNob3VsZFRlYXJEb3duVGVzdGluZ01vZHVsZSgpID09PVxuICAgICAgICBleHBlY3RlZFRlYXJkb3duVmFsdWUpIHtcbiAgICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgICByZXNldEZha2VBc3luY1pvbmUoKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBBUEkgc2hvdWxkIGJlIHJlbW92ZWQuIEJ1dCBkb2luZyBzbyBzZWVtcyB0byBicmVhayBgZ29vZ2xlM2AgYW5kIHNvIGl0IHJlcXVpcmVzIGEgYml0IG9mXG4gKiBpbnZlc3RpZ2F0aW9uLlxuICpcbiAqIEEgd29yayBhcm91bmQgaXMgdG8gbWFyayBpdCBhcyBgQGNvZGVHZW5BcGlgIGZvciBub3cgYW5kIGludmVzdGlnYXRlIGxhdGVyLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbi8vIFRPRE8oaW1pbmFyKTogUmVtb3ZlIHRoaXMgY29kZSBpbiBhIHNhZmUgd2F5LlxuZXhwb3J0IGNvbnN0IF9fY29yZV9wcml2YXRlX3Rlc3RpbmdfcGxhY2Vob2xkZXJfXyA9ICcnO1xuIl19
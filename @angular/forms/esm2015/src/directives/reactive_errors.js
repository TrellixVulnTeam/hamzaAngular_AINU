/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { formArrayNameExample, formControlNameExample, formGroupNameExample, ngModelGroupExample } from './error_examples';
export function controlParentException() {
    return new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
export function ngModelGroupException() {
    return new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
export function missingFormException() {
    return new Error(`formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
export function groupParentException() {
    return new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
export function arrayParentException() {
    return new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
export const disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });
`;
export function ngModelWarning(directiveName) {
    return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName'}#use-with-ngmodel
  `;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVfZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3pILE1BQU0sVUFBVSxzQkFBc0I7SUFDcEMsT0FBTyxJQUFJLEtBQUssQ0FDWjs7Ozs7TUFLQSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsT0FBTyxJQUFJLEtBQUssQ0FDWjs7Ozs7UUFLRSxvQkFBb0I7Ozs7UUFJcEIsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE9BQU8sSUFBSSxLQUFLLENBQUM7Ozs7UUFJWCxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTyxJQUFJLEtBQUssQ0FDWjs7Ozs7TUFLQSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTyxJQUFJLEtBQUssQ0FDWjs7Ozs7UUFLRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHOzs7Ozs7Ozs7O0NBVWxDLENBQUM7QUFFRixNQUFNLFVBQVUsY0FBYyxDQUFDLGFBQXFCO0lBQ2xELE9BQU87aUVBQ3dELGFBQWE7Ozs7OztpQ0FPeEUsYUFBYSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtHQUMvRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Zvcm1BcnJheU5hbWVFeGFtcGxlLCBmb3JtQ29udHJvbE5hbWVFeGFtcGxlLCBmb3JtR3JvdXBOYW1lRXhhbXBsZSwgbmdNb2RlbEdyb3VwRXhhbXBsZX0gZnJvbSAnLi9lcnJvcl9leGFtcGxlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgYGZvcm1Db250cm9sTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICBFeGFtcGxlOlxuXG4gICAgJHtmb3JtQ29udHJvbE5hbWVFeGFtcGxlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgIGBmb3JtQ29udHJvbE5hbWUgY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBuZ01vZGVsR3JvdXAgcGFyZW50LiBJdCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwYXJlbnRzXG4gICAgICB0aGF0IGFsc28gaGF2ZSBhIFwiZm9ybVwiIHByZWZpeDogZm9ybUdyb3VwTmFtZSwgZm9ybUFycmF5TmFtZSwgb3IgZm9ybUdyb3VwLlxuXG4gICAgICBPcHRpb24gMTogIFVwZGF0ZSB0aGUgcGFyZW50IHRvIGJlIGZvcm1Hcm91cE5hbWUgKHJlYWN0aXZlIGZvcm0gc3RyYXRlZ3kpXG5cbiAgICAgICR7Zm9ybUdyb3VwTmFtZUV4YW1wbGV9XG5cbiAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxuXG4gICAgICAke25nTW9kZWxHcm91cEV4YW1wbGV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXNzaW5nRm9ybUV4Y2VwdGlvbigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoYGZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICR7Zm9ybUNvbnRyb2xOYW1lRXhhbXBsZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwUGFyZW50RXhjZXB0aW9uKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgIGBmb3JtR3JvdXBOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICBFeGFtcGxlOlxuXG4gICAgJHtmb3JtR3JvdXBOYW1lRXhhbXBsZX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UGFyZW50RXhjZXB0aW9uKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgIGBmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cblxuICAgICAgRXhhbXBsZTpcblxuICAgICAgJHtmb3JtQXJyYXlOYW1lRXhhbXBsZX1gKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkQXR0cldhcm5pbmcgPSBgXG4gIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2l0aCBhIHJlYWN0aXZlIGZvcm0gZGlyZWN0aXZlLiBJZiB5b3Ugc2V0IGRpc2FibGVkIHRvIHRydWVcbiAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxuICB5b3UuIFdlIHJlY29tbWVuZCB1c2luZyB0aGlzIGFwcHJvYWNoIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9ycy5cblxuICBFeGFtcGxlOlxuICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgfSk7XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gbmdNb2RlbFdhcm5pbmcoZGlyZWN0aXZlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBcbiAgSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgbmdNb2RlbCBvbiB0aGUgc2FtZSBmb3JtIGZpZWxkIGFzICR7ZGlyZWN0aXZlTmFtZX0uXG4gIFN1cHBvcnQgZm9yIHVzaW5nIHRoZSBuZ01vZGVsIGlucHV0IHByb3BlcnR5IGFuZCBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpdGhcbiAgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmVzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gQW5ndWxhciB2NiBhbmQgd2lsbCBiZSByZW1vdmVkXG4gIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgQW5ndWxhci5cblxuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzLCBzZWUgb3VyIEFQSSBkb2NzIGhlcmU6XG4gIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvJHtcbiAgICAgIGRpcmVjdGl2ZU5hbWUgPT09ICdmb3JtQ29udHJvbCcgPyAnRm9ybUNvbnRyb2xEaXJlY3RpdmUnIDogJ0Zvcm1Db250cm9sTmFtZSd9I3VzZS13aXRoLW5nbW9kZWxcbiAgYDtcbn1cbiJdfQ==
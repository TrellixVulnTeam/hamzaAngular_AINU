/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/fil", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && (i === 1 || (i === 2 || i === 3)) || (v === 0 && !(i % 10 === 4 || (i % 10 === 6 || i % 10 === 9)) || !(v === 0) && !(f % 10 === 4 || (f % 10 === 6 || f % 10 === 9))))
            return 1;
        return 5;
    }
    exports.default = ["fil", [["am", "pm"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], u, ["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], ["Li", "Lu", "Ma", "Mi", "Hu", "Bi", "Sa"]], u, [["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], u, ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"]], [["E", "P", "M", "A", "M", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], ["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"]], [["BC", "AD"], u, ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'nang' {0}", u], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "PHP", "₱", "Piso ng Pilipinas", { "PHP": ["₱"], "THB": ["฿"], "TWD": ["NT$"] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvZmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsMENBQTBDO0lBQzFDLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3pCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEosSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqTCxPQUFPLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGtCQUFlLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLGVBQWUsRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbmNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCwgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcblxuaWYgKHYgPT09IDAgJiYgKGkgPT09IDEgfHwgKGkgPT09IDIgfHwgaSA9PT0gMykpIHx8ICh2ID09PSAwICYmICEoaSAlIDEwID09PSA0IHx8IChpICUgMTAgPT09IDYgfHwgaSAlIDEwID09PSA5KSkgfHwgISh2ID09PSAwKSAmJiAhKGYgJSAxMCA9PT0gNCB8fCAoZiAlIDEwID09PSA2IHx8IGYgJSAxMCA9PT0gOSkpKSlcbiAgICByZXR1cm4gMTtcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJmaWxcIixbW1wiYW1cIixcInBtXCJdLFtcIkFNXCIsXCJQTVwiXSx1XSxbW1wiQU1cIixcIlBNXCJdLHUsdV0sW1tcIkxpblwiLFwiTHVuXCIsXCJNYXJcIixcIk1peVwiLFwiSHV3XCIsXCJCaXlcIixcIlNhYlwiXSx1LFtcIkxpbmdnb1wiLFwiTHVuZXNcIixcIk1hcnRlc1wiLFwiTWl5ZXJrdWxlc1wiLFwiSHV3ZWJlc1wiLFwiQml5ZXJuZXNcIixcIlNhYmFkb1wiXSxbXCJMaVwiLFwiTHVcIixcIk1hXCIsXCJNaVwiLFwiSHVcIixcIkJpXCIsXCJTYVwiXV0sdSxbW1wiRW5lXCIsXCJQZWJcIixcIk1hclwiLFwiQWJyXCIsXCJNYXlcIixcIkh1blwiLFwiSHVsXCIsXCJBZ29cIixcIlNldFwiLFwiT2t0XCIsXCJOb2JcIixcIkRpc1wiXSx1LFtcIkVuZXJvXCIsXCJQZWJyZXJvXCIsXCJNYXJzb1wiLFwiQWJyaWxcIixcIk1heW9cIixcIkh1bnlvXCIsXCJIdWx5b1wiLFwiQWdvc3RvXCIsXCJTZXR5ZW1icmVcIixcIk9rdHVicmVcIixcIk5vYnllbWJyZVwiLFwiRGlzeWVtYnJlXCJdXSxbW1wiRVwiLFwiUFwiLFwiTVwiLFwiQVwiLFwiTVwiLFwiSHVuXCIsXCJIdWxcIixcIkFnb1wiLFwiU2V0XCIsXCJPa3RcIixcIk5vYlwiLFwiRGlzXCJdLFtcIkVuZVwiLFwiUGViXCIsXCJNYXJcIixcIkFiclwiLFwiTWF5XCIsXCJIdW5cIixcIkh1bFwiLFwiQWdvXCIsXCJTZXRcIixcIk9rdFwiLFwiTm9iXCIsXCJEaXNcIl0sW1wiRW5lcm9cIixcIlBlYnJlcm9cIixcIk1hcnNvXCIsXCJBYnJpbFwiLFwiTWF5b1wiLFwiSHVueW9cIixcIkh1bHlvXCIsXCJBZ29zdG9cIixcIlNldHllbWJyZVwiLFwiT2t0dWJyZVwiLFwiTm9ieWVtYnJlXCIsXCJEaXN5ZW1icmVcIl1dLFtbXCJCQ1wiLFwiQURcIl0sdSxbXCJCZWZvcmUgQ2hyaXN0XCIsXCJBbm5vIERvbWluaVwiXV0sMCxbNiwwXSxbXCJNL2QveXlcIixcIk1NTSBkLCB5XCIsXCJNTU1NIGQsIHlcIixcIkVFRUUsIE1NTU0gZCwgeVwiXSxbXCJoOm1tIGFcIixcImg6bW06c3MgYVwiLFwiaDptbTpzcyBhIHpcIixcImg6bW06c3MgYSB6enp6XCJdLFtcInsxfSwgezB9XCIsdSxcInsxfSAnbmFuZycgezB9XCIsdV0sW1wiLlwiLFwiLFwiLFwiO1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiRVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCJOYU5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMCVcIixcIsKkIywjIzAuMDBcIixcIiNFMFwiXSxcIlBIUFwiLFwi4oKxXCIsXCJQaXNvIG5nIFBpbGlwaW5hc1wiLHtcIlBIUFwiOltcIuKCsVwiXSxcIlRIQlwiOltcIuC4v1wiXSxcIlRXRFwiOltcIk5UJFwiXX0sXCJsdHJcIiwgcGx1cmFsXTtcbiJdfQ==
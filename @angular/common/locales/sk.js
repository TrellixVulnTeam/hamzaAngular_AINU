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
        define("@angular/common/locales/sk", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        if (i === Math.floor(i) && (i >= 2 && i <= 4) && v === 0)
            return 3;
        if (!(v === 0))
            return 4;
        return 5;
    }
    exports.default = ["sk", [["AM", "PM"], u, u], u, [["n", "p", "u", "s", "š", "p", "s"], ["ne", "po", "ut", "st", "št", "pi", "so"], ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], ["ne", "po", "ut", "st", "št", "pi", "so"]], u, [["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"]], [["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"]], [["pred Kr.", "po Kr."], u, ["pred Kristom", "po Kristovi"]], 1, [6, 0], ["d. M. y", u, "d. MMMM y", "EEEE d. MMMM y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", u, u], [",", " ", ";", "%", "+", "-", "e", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", { "AUD": [u, "$"], "BRL": [u, "R$"], "CAD": [u, "$"], "CNY": [u, "¥"], "GBP": [u, "£"], "HKD": [u, "$"], "ILS": ["NIS", "₪"], "INR": [u, "₹"], "JPY": [u, "¥"], "KRW": [u, "₩"], "NZD": [u, "$"], "TWD": [u, "NT$"], "USD": [u, "$"], "VND": [u, "₫"], "XXX": [] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN6QixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRXBGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsQixPQUFPLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNwRCxPQUFPLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDVixPQUFPLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELGtCQUFlLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLGNBQWMsRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxjQUFjLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZLlxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG5cbmlmIChpID09PSAxICYmIHYgPT09IDApXG4gICAgcmV0dXJuIDE7XG5pZiAoaSA9PT0gTWF0aC5mbG9vcihpKSAmJiAoaSA+PSAyICYmIGkgPD0gNCkgJiYgdiA9PT0gMClcbiAgICByZXR1cm4gMztcbmlmICghKHYgPT09IDApKVxuICAgIHJldHVybiA0O1xucmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcInNrXCIsW1tcIkFNXCIsXCJQTVwiXSx1LHVdLHUsW1tcIm5cIixcInBcIixcInVcIixcInNcIixcIsWhXCIsXCJwXCIsXCJzXCJdLFtcIm5lXCIsXCJwb1wiLFwidXRcIixcInN0XCIsXCLFoXRcIixcInBpXCIsXCJzb1wiXSxbXCJuZWRlxL5hXCIsXCJwb25kZWxva1wiLFwidXRvcm9rXCIsXCJzdHJlZGFcIixcIsWhdHZydG9rXCIsXCJwaWF0b2tcIixcInNvYm90YVwiXSxbXCJuZVwiLFwicG9cIixcInV0XCIsXCJzdFwiLFwixaF0XCIsXCJwaVwiLFwic29cIl1dLHUsW1tcImpcIixcImZcIixcIm1cIixcImFcIixcIm1cIixcImpcIixcImpcIixcImFcIixcInNcIixcIm9cIixcIm5cIixcImRcIl0sW1wiamFuXCIsXCJmZWJcIixcIm1hclwiLFwiYXByXCIsXCJtw6FqXCIsXCJqw7puXCIsXCJqw7psXCIsXCJhdWdcIixcInNlcFwiLFwib2t0XCIsXCJub3ZcIixcImRlY1wiXSxbXCJqYW51w6FyYVwiLFwiZmVicnXDoXJhXCIsXCJtYXJjYVwiLFwiYXByw61sYVwiLFwibcOhamFcIixcImrDum5hXCIsXCJqw7psYVwiLFwiYXVndXN0YVwiLFwic2VwdGVtYnJhXCIsXCJva3TDs2JyYVwiLFwibm92ZW1icmFcIixcImRlY2VtYnJhXCJdXSxbW1wialwiLFwiZlwiLFwibVwiLFwiYVwiLFwibVwiLFwialwiLFwialwiLFwiYVwiLFwic1wiLFwib1wiLFwiblwiLFwiZFwiXSxbXCJqYW5cIixcImZlYlwiLFwibWFyXCIsXCJhcHJcIixcIm3DoWpcIixcImrDum5cIixcImrDumxcIixcImF1Z1wiLFwic2VwXCIsXCJva3RcIixcIm5vdlwiLFwiZGVjXCJdLFtcImphbnXDoXJcIixcImZlYnJ1w6FyXCIsXCJtYXJlY1wiLFwiYXByw61sXCIsXCJtw6FqXCIsXCJqw7puXCIsXCJqw7psXCIsXCJhdWd1c3RcIixcInNlcHRlbWJlclwiLFwib2t0w7NiZXJcIixcIm5vdmVtYmVyXCIsXCJkZWNlbWJlclwiXV0sW1tcInByZWQgS3IuXCIsXCJwbyBLci5cIl0sdSxbXCJwcmVkIEtyaXN0b21cIixcInBvIEtyaXN0b3ZpXCJdXSwxLFs2LDBdLFtcImQuIE0uIHlcIix1LFwiZC4gTU1NTSB5XCIsXCJFRUVFIGQuIE1NTU0geVwiXSxbXCJIOm1tXCIsXCJIOm1tOnNzXCIsXCJIOm1tOnNzIHpcIixcIkg6bW06c3Mgenp6elwiXSxbXCJ7MX0gezB9XCIsXCJ7MX0sIHswfVwiLHUsdV0sW1wiLFwiLFwiwqBcIixcIjtcIixcIiVcIixcIitcIixcIi1cIixcImVcIixcIsOXXCIsXCLigLBcIixcIuKInlwiLFwiTmFOXCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzDCoCVcIixcIiMsIyMwLjAwwqDCpFwiLFwiI0UwXCJdLFwiRVVSXCIsXCLigqxcIixcImV1cm9cIix7XCJBVURcIjpbdSxcIiRcIl0sXCJCUkxcIjpbdSxcIlIkXCJdLFwiQ0FEXCI6W3UsXCIkXCJdLFwiQ05ZXCI6W3UsXCLCpVwiXSxcIkdCUFwiOlt1LFwiwqNcIl0sXCJIS0RcIjpbdSxcIiRcIl0sXCJJTFNcIjpbXCJOSVNcIixcIuKCqlwiXSxcIklOUlwiOlt1LFwi4oK5XCJdLFwiSlBZXCI6W3UsXCLCpVwiXSxcIktSV1wiOlt1LFwi4oKpXCJdLFwiTlpEXCI6W3UsXCIkXCJdLFwiVFdEXCI6W3UsXCJOVCRcIl0sXCJVU0RcIjpbdSxcIiRcIl0sXCJWTkRcIjpbdSxcIuKCq1wiXSxcIlhYWFwiOltdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19
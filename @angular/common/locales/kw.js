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
        define("@angular/common/locales/kw", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY.
    var u = undefined;
    function plural(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n % 100 === 2 || (n % 100 === 22 || (n % 100 === 42 || (n % 100 === 62 || n % 100 === 82))) || (n % 1000 === 0 && (n % 100000 === Math.floor(n % 100000) && (n % 100000 >= 1000 && n % 100000 <= 20000 || (n % 100000 === 40000 || (n % 100000 === 60000 || n % 100000 === 80000)))) || !(n === 0) && n % 1000000 === 100000))
            return 2;
        if (n % 100 === 3 || (n % 100 === 23 || (n % 100 === 43 || (n % 100 === 63 || n % 100 === 83))))
            return 3;
        if (!(n === 1) && (n % 100 === 1 || (n % 100 === 21 || (n % 100 === 41 || (n % 100 === 61 || n % 100 === 81)))))
            return 4;
        return 5;
    }
    exports.default = ["kw", [["a.m.", "p.m."], u, u], u, [["S", "M", "T", "W", "T", "F", "S"], ["Sul", "Lun", "Mth", "Mhr", "Yow", "Gwe", "Sad"], ["dy Sul", "dy Lun", "dy Meurth", "dy Merher", "dy Yow", "dy Gwener", "dy Sadorn"], ["Sul", "Lun", "Mth", "Mhr", "Yow", "Gwe", "Sad"]], u, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["Gen", "Hwe", "Meu", "Ebr", "Me", "Met", "Gor", "Est", "Gwn", "Hed", "Du", "Kev"], ["mis Genver", "mis Hwevrer", "mis Meurth", "mis Ebrel", "mis Me", "mis Metheven", "mis Gortheren", "mis Est", "mis Gwynngala", "mis Hedra", "mis Du", "mis Kevardhu"]], u, [["RC", "AD"], u, u], 1, [6, 0], ["y-MM-dd", "y MMM d", "y MMMM d", "y MMMM d, EEEE"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, u, u], [".", ",", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "¤#,##0.00", "#E0"], "GBP", "£", "GBP", { "JPY": ["JP¥", "¥"], "USD": ["US$", "$"] }, "ltr", plural];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9rdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILDBDQUEwQztJQUMxQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxLQUFLLE1BQU0sQ0FBQztZQUM3VCxPQUFPLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0csT0FBTyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxrQkFBZSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZLlxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG5cbmlmIChuID09PSAwKVxuICAgIHJldHVybiAwO1xuaWYgKG4gPT09IDEpXG4gICAgcmV0dXJuIDE7XG5pZiAobiAlIDEwMCA9PT0gMiB8fCAobiAlIDEwMCA9PT0gMjIgfHwgKG4gJSAxMDAgPT09IDQyIHx8IChuICUgMTAwID09PSA2MiB8fCBuICUgMTAwID09PSA4MikpKSB8fCAobiAlIDEwMDAgPT09IDAgJiYgKG4gJSAxMDAwMDAgPT09IE1hdGguZmxvb3IobiAlIDEwMDAwMCkgJiYgKG4gJSAxMDAwMDAgPj0gMTAwMCAmJiBuICUgMTAwMDAwIDw9IDIwMDAwIHx8IChuICUgMTAwMDAwID09PSA0MDAwMCB8fCAobiAlIDEwMDAwMCA9PT0gNjAwMDAgfHwgbiAlIDEwMDAwMCA9PT0gODAwMDApKSkpIHx8ICEobiA9PT0gMCkgJiYgbiAlIDEwMDAwMDAgPT09IDEwMDAwMCkpXG4gICAgcmV0dXJuIDI7XG5pZiAobiAlIDEwMCA9PT0gMyB8fCAobiAlIDEwMCA9PT0gMjMgfHwgKG4gJSAxMDAgPT09IDQzIHx8IChuICUgMTAwID09PSA2MyB8fCBuICUgMTAwID09PSA4MykpKSlcbiAgICByZXR1cm4gMztcbmlmICghKG4gPT09IDEpICYmIChuICUgMTAwID09PSAxIHx8IChuICUgMTAwID09PSAyMSB8fCAobiAlIDEwMCA9PT0gNDEgfHwgKG4gJSAxMDAgPT09IDYxIHx8IG4gJSAxMDAgPT09IDgxKSkpKSlcbiAgICByZXR1cm4gNDtcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJrd1wiLFtbXCJhLm0uXCIsXCJwLm0uXCJdLHUsdV0sdSxbW1wiU1wiLFwiTVwiLFwiVFwiLFwiV1wiLFwiVFwiLFwiRlwiLFwiU1wiXSxbXCJTdWxcIixcIkx1blwiLFwiTXRoXCIsXCJNaHJcIixcIllvd1wiLFwiR3dlXCIsXCJTYWRcIl0sW1wiZHkgU3VsXCIsXCJkeSBMdW5cIixcImR5IE1ldXJ0aFwiLFwiZHkgTWVyaGVyXCIsXCJkeSBZb3dcIixcImR5IEd3ZW5lclwiLFwiZHkgU2Fkb3JuXCJdLFtcIlN1bFwiLFwiTHVuXCIsXCJNdGhcIixcIk1oclwiLFwiWW93XCIsXCJHd2VcIixcIlNhZFwiXV0sdSxbW1wiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiMTBcIixcIjExXCIsXCIxMlwiXSxbXCJHZW5cIixcIkh3ZVwiLFwiTWV1XCIsXCJFYnJcIixcIk1lXCIsXCJNZXRcIixcIkdvclwiLFwiRXN0XCIsXCJHd25cIixcIkhlZFwiLFwiRHVcIixcIktldlwiXSxbXCJtaXMgR2VudmVyXCIsXCJtaXMgSHdldnJlclwiLFwibWlzIE1ldXJ0aFwiLFwibWlzIEVicmVsXCIsXCJtaXMgTWVcIixcIm1pcyBNZXRoZXZlblwiLFwibWlzIEdvcnRoZXJlblwiLFwibWlzIEVzdFwiLFwibWlzIEd3eW5uZ2FsYVwiLFwibWlzIEhlZHJhXCIsXCJtaXMgRHVcIixcIm1pcyBLZXZhcmRodVwiXV0sdSxbW1wiUkNcIixcIkFEXCJdLHUsdV0sMSxbNiwwXSxbXCJ5LU1NLWRkXCIsXCJ5IE1NTSBkXCIsXCJ5IE1NTU0gZFwiLFwieSBNTU1NIGQsIEVFRUVcIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyB6enp6XCJdLFtcInsxfSB7MH1cIix1LHUsdV0sW1wiLlwiLFwiLFwiLFwiO1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiRVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCJOYU5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMCVcIixcIsKkIywjIzAuMDBcIixcIiNFMFwiXSxcIkdCUFwiLFwiwqNcIixcIkdCUFwiLHtcIkpQWVwiOltcIkpQwqVcIixcIsKlXCJdLFwiVVNEXCI6W1wiVVMkXCIsXCIkXCJdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19
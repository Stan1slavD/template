var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var topArtistList = document.body.querySelector(".hits");
var topTracksList = document.body.querySelector(".popular_tracks");
function fetchTopArtists() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=12&format=json")
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data.artists; })
                        .then(function (artist) { return artist.artist.forEach(function (data) { return pushToHits(data); }); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function fetchTopTracks() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=18&format=json")
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data.tracks; })
                        .then(function (track) { return track.track.forEach(function (data) { return pushToPopularTracks(data); }); })["catch"](function (err) { return console.log(err); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function pushToHits(data) {
    var template = "<div class=\"hit_card\">\n        <a href=\"".concat(data.url, "\" class=\"link\">\n          <img\n            src=\"").concat(data.image[4]["#text"], "\"\n            height=\"150\"\n            alt=\"").concat(data.name, "\"\n            class=\"hit_img\"\n          />\n          <div class=\"hit_text\">\n            <span class=\"autor\">").concat(data.name, "</span>\n            <span class=\"ganre\">listeners: ").concat(data.listeners, "</span>\n          </div>\n        </a>\n      </div>");
    topArtistList === null || topArtistList === void 0 ? void 0 : topArtistList.insertAdjacentHTML("beforeend", template);
}
function pushToPopularTracks(data) {
    var template = "<div class=\"popular_track_card\">\n    <a href=\"".concat(data.url, "\" class=\"link\">\n      <div class=\"card_content\">\n        <img\n          src=\"").concat(data.image[3]["#text"], "\"\n          alt=\"").concat(data.name, "\"\n          width=\"75\"\n          height=\"75\"\n        />\n        <div class=\"card_text\">\n          <span class=\"track_name\">").concat(data.name, "</span>\n          <span class=\"track_group\"> ").concat(data.artist.name, " </span>\n          <span class=\"track_ganre\">listeners: ").concat(data.listeners, " </span>\n        </div>\n      </div>\n    </a>\n  </div>");
    topTracksList === null || topTracksList === void 0 ? void 0 : topTracksList.insertAdjacentHTML("beforeend", template);
}
fetchTopArtists();
fetchTopTracks();

const
    RGB_MODIFIERS = {
        r: 0.299,
        g: 0.587,
        b: 0.114,
    },
    HEXADECIMAL_MAXIMUM_DIGIT = 16;

/** Gives the corresponding colour of a specific programming language.
 * @param {String} languageName The name of the programming language.
 * @returns The colour that corresponds to the programming language.
 */
export default function GetLanguageColour(languageName) {
    return LANGUAGE_COLOURS[languageName]?.colour ?? "red";
}

/** Decides from two given fore colours whether to choose, according to a specified colour.
 * @param {String} colour The colour that the fore colour will be chosen according to.
 * @param {String} brightColour The fore colour that'll be chosen if the specified colour was dark.
 * @param {String} darkColour The fore colour that'll be chosen if the specified colour was bright.
 * @returns A good most seeable fore colour.
 */
export function GetForeColour(colour, brightColour, darkColour) {
    return parseInt(colour.replace("#", ""), 16) <= parseInt("FFFFFF", 16) / 2 ? brightColour : darkColour;
}

const LANGUAGE_COLOURS = {
    "1C Enterprise": {
        "colour": "#814CCC",
        "url": "https://github.com/trending?l=1C-Enterprise"
    },
    "2-Dimensional Array": {
        "colour": "#38761D",
        "url": "https://github.com/trending?l=2-Dimensional-Array"
    },
    "4D": {
        "colour": "#004289",
        "url": "https://github.com/trending?l=4D"
    },
    "ABAP": {
        "colour": "#E8274B",
        "url": "https://github.com/trending?l=ABAP"
    },
    "ABAP CDS": {
        "colour": "#555e25",
        "url": "https://github.com/trending?l=ABAP-CDS"
    },
    "ActionScript": {
        "colour": "#882B0F",
        "url": "https://github.com/trending?l=ActionScript"
    },
    "Ada": {
        "colour": "#02f88c",
        "url": "https://github.com/trending?l=Ada"
    },
    "Adblock Filter List": {
        "colour": "#800000",
        "url": "https://github.com/trending?l=Adblock-Filter-List"
    },
    "Adobe Font Metrics": {
        "colour": "#fa0f00",
        "url": "https://github.com/trending?l=Adobe-Font-Metrics"
    },
    "Agda": {
        "colour": "#315665",
        "url": "https://github.com/trending?l=Agda"
    },
    "AGS Script": {
        "colour": "#B9D9FF",
        "url": "https://github.com/trending?l=AGS-Script"
    },
    "AIDL": {
        "colour": "#34EB6B",
        "url": "https://github.com/trending?l=AIDL"
    },
    "AL": {
        "colour": "#3AA2B5",
        "url": "https://github.com/trending?l=AL"
    },
    "Alloy": {
        "colour": "#64C800",
        "url": "https://github.com/trending?l=Alloy"
    },
    "Alpine Abuild": {
        "colour": "#0D597F",
        "url": "https://github.com/trending?l=Alpine-Abuild"
    },
    "Altium Designer": {
        "colour": "#A89663",
        "url": "https://github.com/trending?l=Altium-Designer"
    },
    "AMPL": {
        "colour": "#E6EFBB",
        "url": "https://github.com/trending?l=AMPL"
    },
    "AngelScript": {
        "colour": "#C7D7DC",
        "url": "https://github.com/trending?l=AngelScript"
    },
    "Ant Build System": {
        "colour": "#A9157E",
        "url": "https://github.com/trending?l=Ant-Build-System"
    },
    "Antlers": {
        "colour": "#ff269e",
        "url": "https://github.com/trending?l=Antlers"
    },
    "ANTLR": {
        "colour": "#9DC3FF",
        "url": "https://github.com/trending?l=ANTLR"
    },
    "ApacheConf": {
        "colour": "#d12127",
        "url": "https://github.com/trending?l=ApacheConf"
    },
    "Apex": {
        "colour": "#1797c0",
        "url": "https://github.com/trending?l=Apex"
    },
    "API Blueprint": {
        "colour": "#2ACCA8",
        "url": "https://github.com/trending?l=API-Blueprint"
    },
    "APL": {
        "colour": "#5A8164",
        "url": "https://github.com/trending?l=APL"
    },
    "Apollo Guidance Computer": {
        "colour": "#0B3D91",
        "url": "https://github.com/trending?l=Apollo-Guidance-Computer"
    },
    "AppleScript": {
        "colour": "#101F1F",
        "url": "https://github.com/trending?l=AppleScript"
    },
    "Arc": {
        "colour": "#aa2afe",
        "url": "https://github.com/trending?l=Arc"
    },
    "AsciiDoc": {
        "colour": "#73a0c5",
        "url": "https://github.com/trending?l=AsciiDoc"
    },
    "ASL": {
        "colour": null,
        "url": "https://github.com/trending?l=ASL"
    },
    "ASP.NET": {
        "colour": "#9400ff",
        "url": "https://github.com/trending?l=ASP.NET"
    },
    "AspectJ": {
        "colour": "#a957b0",
        "url": "https://github.com/trending?l=AspectJ"
    },
    "Assembly": {
        "colour": "#6E4C13",
        "url": "https://github.com/trending?l=Assembly"
    },
    "Astro": {
        "colour": "#ff5a03",
        "url": "https://github.com/trending?l=Astro"
    },
    "Asymptote": {
        "colour": "#ff0000",
        "url": "https://github.com/trending?l=Asymptote"
    },
    "ATS": {
        "colour": "#1ac620",
        "url": "https://github.com/trending?l=ATS"
    },
    "Augeas": {
        "colour": "#9CC134",
        "url": "https://github.com/trending?l=Augeas"
    },
    "AutoHotkey": {
        "colour": "#6594b9",
        "url": "https://github.com/trending?l=AutoHotkey"
    },
    "AutoIt": {
        "colour": "#1C3552",
        "url": "https://github.com/trending?l=AutoIt"
    },
    "Avro IDL": {
        "colour": "#0040FF",
        "url": "https://github.com/trending?l=Avro-IDL"
    },
    "Awk": {
        "colour": "#c30e9b",
        "url": "https://github.com/trending?l=Awk"
    },
    "Ballerina": {
        "colour": "#FF5000",
        "url": "https://github.com/trending?l=Ballerina"
    },
    "BASIC": {
        "colour": "#ff0000",
        "url": "https://github.com/trending?l=BASIC"
    },
    "Batchfile": {
        "colour": "#C1F12E",
        "url": "https://github.com/trending?l=Batchfile"
    },
    "Beef": {
        "colour": "#a52f4e",
        "url": "https://github.com/trending?l=Beef"
    },
    "Befunge": {
        "colour": null,
        "url": "https://github.com/trending?l=Befunge"
    },
    "Berry": {
        "colour": "#15A13C",
        "url": "https://github.com/trending?l=Berry"
    },
    "BibTeX": {
        "colour": "#778899",
        "url": "https://github.com/trending?l=BibTeX"
    },
    "Bicep": {
        "colour": "#519aba",
        "url": "https://github.com/trending?l=Bicep"
    },
    "Bikeshed": {
        "colour": "#5562ac",
        "url": "https://github.com/trending?l=Bikeshed"
    },
    "Bison": {
        "colour": "#6A463F",
        "url": "https://github.com/trending?l=Bison"
    },
    "BitBake": {
        "colour": "#00bce4",
        "url": "https://github.com/trending?l=BitBake"
    },
    "Blade": {
        "colour": "#f7523f",
        "url": "https://github.com/trending?l=Blade"
    },
    "BlitzBasic": {
        "colour": "#00FFAE",
        "url": "https://github.com/trending?l=BlitzBasic"
    },
    "BlitzMax": {
        "colour": "#cd6400",
        "url": "https://github.com/trending?l=BlitzMax"
    },
    "Bluespec": {
        "colour": "#12223c",
        "url": "https://github.com/trending?l=Bluespec"
    },
    "Boo": {
        "colour": "#d4bec1",
        "url": "https://github.com/trending?l=Boo"
    },
    "Boogie": {
        "colour": "#c80fa0",
        "url": "https://github.com/trending?l=Boogie"
    },
    "Brainfuck": {
        "colour": "#2F2530",
        "url": "https://github.com/trending?l=Brainfuck"
    },
    "BrighterScript": {
        "colour": "#66AABB",
        "url": "https://github.com/trending?l=BrighterScript"
    },
    "Brightscript": {
        "colour": "#662D91",
        "url": "https://github.com/trending?l=Brightscript"
    },
    "Browserslist": {
        "colour": "#ffd539",
        "url": "https://github.com/trending?l=Browserslist"
    },
    "C": {
        "colour": "#555555",
        "url": "https://github.com/trending?l=C"
    },
    "C#": {
        "colour": "#178600",
        "url": "https://github.com/trending?l=Csharp"
    },
    "C++": {
        "colour": "#f34b7d",
        "url": "https://github.com/trending?l=C++"
    },
    "C2hs Haskell": {
        "colour": null,
        "url": "https://github.com/trending?l=C2hs-Haskell"
    },
    "Cabal Config": {
        "colour": "#483465",
        "url": "https://github.com/trending?l=Cabal-Config"
    },
    "Cadence": {
        "colour": "#00ef8b",
        "url": "https://github.com/trending?l=Cadence"
    },
    "Cairo": {
        "colour": "#ff4a48",
        "url": "https://github.com/trending?l=Cairo"
    },
    "CameLIGO": {
        "colour": "#3be133",
        "url": "https://github.com/trending?l=CameLIGO"
    },
    "CAP CDS": {
        "colour": "#0092d1",
        "url": "https://github.com/trending?l=CAP-CDS"
    },
    "Cap'n Proto": {
        "colour": "#c42727",
        "url": "https://github.com/trending?l=Cap'n-Proto"
    },
    "CartoCSS": {
        "colour": null,
        "url": "https://github.com/trending?l=CartoCSS"
    },
    "Ceylon": {
        "colour": "#dfa535",
        "url": "https://github.com/trending?l=Ceylon"
    },
    "Chapel": {
        "colour": "#8dc63f",
        "url": "https://github.com/trending?l=Chapel"
    },
    "Charity": {
        "colour": null,
        "url": "https://github.com/trending?l=Charity"
    },
    "ChucK": {
        "colour": "#3f8000",
        "url": "https://github.com/trending?l=ChucK"
    },
    "Circom": {
        "colour": "#707575",
        "url": "https://github.com/trending?l=Circom"
    },
    "Cirru": {
        "colour": "#ccccff",
        "url": "https://github.com/trending?l=Cirru"
    },
    "Clarion": {
        "colour": "#db901e",
        "url": "https://github.com/trending?l=Clarion"
    },
    "Clarity": {
        "colour": "#5546ff",
        "url": "https://github.com/trending?l=Clarity"
    },
    "Classic ASP": {
        "colour": "#6a40fd",
        "url": "https://github.com/trending?l=Classic-ASP"
    },
    "Clean": {
        "colour": "#3F85AF",
        "url": "https://github.com/trending?l=Clean"
    },
    "Click": {
        "colour": "#E4E6F3",
        "url": "https://github.com/trending?l=Click"
    },
    "CLIPS": {
        "colour": "#00A300",
        "url": "https://github.com/trending?l=CLIPS"
    },
    "Clojure": {
        "colour": "#db5855",
        "url": "https://github.com/trending?l=Clojure"
    },
    "Closure Templates": {
        "colour": "#0d948f",
        "url": "https://github.com/trending?l=Closure-Templates"
    },
    "Cloud Firestore Security Rules": {
        "colour": "#FFA000",
        "url": "https://github.com/trending?l=Cloud-Firestore-Security-Rules"
    },
    "CMake": {
        "colour": "#DA3434",
        "url": "https://github.com/trending?l=CMake"
    },
    "COBOL": {
        "colour": null,
        "url": "https://github.com/trending?l=COBOL"
    },
    "CodeQL": {
        "colour": "#140f46",
        "url": "https://github.com/trending?l=CodeQL"
    },
    "CoffeeScript": {
        "colour": "#244776",
        "url": "https://github.com/trending?l=CoffeeScript"
    },
    "ColdFusion": {
        "colour": "#ed2cd6",
        "url": "https://github.com/trending?l=ColdFusion"
    },
    "ColdFusion CFC": {
        "colour": "#ed2cd6",
        "url": "https://github.com/trending?l=ColdFusion-CFC"
    },
    "COLLADA": {
        "colour": "#F1A42B",
        "url": "https://github.com/trending?l=COLLADA"
    },
    "Common Lisp": {
        "colour": "#3fb68b",
        "url": "https://github.com/trending?l=Common-Lisp"
    },
    "Common Workflow Language": {
        "colour": "#B5314C",
        "url": "https://github.com/trending?l=Common-Workflow-Language"
    },
    "Component Pascal": {
        "colour": "#B0CE4E",
        "url": "https://github.com/trending?l=Component-Pascal"
    },
    "Cool": {
        "colour": null,
        "url": "https://github.com/trending?l=Cool"
    },
    "Coq": {
        "colour": "#d0b68c",
        "url": "https://github.com/trending?l=Coq"
    },
    "Crystal": {
        "colour": "#000100",
        "url": "https://github.com/trending?l=Crystal"
    },
    "CSON": {
        "colour": "#244776",
        "url": "https://github.com/trending?l=CSON"
    },
    "Csound": {
        "colour": "#1a1a1a",
        "url": "https://github.com/trending?l=Csound"
    },
    "Csound Document": {
        "colour": "#1a1a1a",
        "url": "https://github.com/trending?l=Csound-Document"
    },
    "Csound Score": {
        "colour": "#1a1a1a",
        "url": "https://github.com/trending?l=Csound-Score"
    },
    "CSS": {
        "colour": "#563d7c",
        "url": "https://github.com/trending?l=CSS"
    },
    "CSV": {
        "colour": "#237346",
        "url": "https://github.com/trending?l=CSV"
    },
    "Cuda": {
        "colour": "#3A4E3A",
        "url": "https://github.com/trending?l=Cuda"
    },
    "CUE": {
        "colour": "#5886E1",
        "url": "https://github.com/trending?l=CUE"
    },
    "Curry": {
        "colour": "#531242",
        "url": "https://github.com/trending?l=Curry"
    },
    "CWeb": {
        "colour": "#00007a",
        "url": "https://github.com/trending?l=CWeb"
    },
    "Cycript": {
        "colour": null,
        "url": "https://github.com/trending?l=Cycript"
    },
    "Cypher": {
        "colour": "#34c0eb",
        "url": "https://github.com/trending?l=Cypher"
    },
    "Cython": {
        "colour": "#fedf5b",
        "url": "https://github.com/trending?l=Cython"
    },
    "D": {
        "colour": "#ba595e",
        "url": "https://github.com/trending?l=D"
    },
    "Dafny": {
        "colour": "#FFEC25",
        "url": "https://github.com/trending?l=Dafny"
    },
    "Darcs Patch": {
        "colour": "#8eff23",
        "url": "https://github.com/trending?l=Darcs-Patch"
    },
    "Dart": {
        "colour": "#00B4AB",
        "url": "https://github.com/trending?l=Dart"
    },
    "DataWeave": {
        "colour": "#003a52",
        "url": "https://github.com/trending?l=DataWeave"
    },
    "Debian Package Control File": {
        "colour": "#D70751",
        "url": "https://github.com/trending?l=Debian-Package-Control-File"
    },
    "DenizenScript": {
        "colour": "#FBEE96",
        "url": "https://github.com/trending?l=DenizenScript"
    },
    "Dhall": {
        "colour": "#dfafff",
        "url": "https://github.com/trending?l=Dhall"
    },
    "DIGITAL Command Language": {
        "colour": null,
        "url": "https://github.com/trending?l=DIGITAL-Command-Language"
    },
    "DirectX 3D File": {
        "colour": "#aace60",
        "url": "https://github.com/trending?l=DirectX-3D-File"
    },
    "DM": {
        "colour": "#447265",
        "url": "https://github.com/trending?l=DM"
    },
    "Dockerfile": {
        "colour": "#384d54",
        "url": "https://github.com/trending?l=Dockerfile"
    },
    "Dogescript": {
        "colour": "#cca760",
        "url": "https://github.com/trending?l=Dogescript"
    },
    "Dotenv": {
        "colour": "#e5d559",
        "url": "https://github.com/trending?l=Dotenv"
    },
    "DTrace": {
        "colour": null,
        "url": "https://github.com/trending?l=DTrace"
    },
    "Dylan": {
        "colour": "#6c616e",
        "url": "https://github.com/trending?l=Dylan"
    },
    "E": {
        "colour": "#ccce35",
        "url": "https://github.com/trending?l=E"
    },
    "Earthly": {
        "colour": "#2af0ff",
        "url": "https://github.com/trending?l=Earthly"
    },
    "Easybuild": {
        "colour": "#069406",
        "url": "https://github.com/trending?l=Easybuild"
    },
    "eC": {
        "colour": "#913960",
        "url": "https://github.com/trending?l=eC"
    },
    "Ecere Projects": {
        "colour": "#913960",
        "url": "https://github.com/trending?l=Ecere-Projects"
    },
    "ECL": {
        "colour": "#8a1267",
        "url": "https://github.com/trending?l=ECL"
    },
    "ECLiPSe": {
        "colour": "#001d9d",
        "url": "https://github.com/trending?l=ECLiPSe"
    },
    "Ecmarkup": {
        "colour": "#eb8131",
        "url": "https://github.com/trending?l=Ecmarkup"
    },
    "EditorConfig": {
        "colour": "#fff1f2",
        "url": "https://github.com/trending?l=EditorConfig"
    },
    "Eiffel": {
        "colour": "#4d6977",
        "url": "https://github.com/trending?l=Eiffel"
    },
    "EJS": {
        "colour": "#a91e50",
        "url": "https://github.com/trending?l=EJS"
    },
    "Elixir": {
        "colour": "#6e4a7e",
        "url": "https://github.com/trending?l=Elixir"
    },
    "Elm": {
        "colour": "#60B5CC",
        "url": "https://github.com/trending?l=Elm"
    },
    "Elvish": {
        "colour": "#55BB55",
        "url": "https://github.com/trending?l=Elvish"
    },
    "Elvish Transcript": {
        "colour": "#55BB55",
        "url": "https://github.com/trending?l=Elvish-Transcript"
    },
    "Emacs Lisp": {
        "colour": "#c065db",
        "url": "https://github.com/trending?l=Emacs-Lisp"
    },
    "EmberScript": {
        "colour": "#FFF4F3",
        "url": "https://github.com/trending?l=EmberScript"
    },
    "EQ": {
        "colour": "#a78649",
        "url": "https://github.com/trending?l=EQ"
    },
    "Erlang": {
        "colour": "#B83998",
        "url": "https://github.com/trending?l=Erlang"
    },
    "Euphoria": {
        "colour": "#FF790B",
        "url": "https://github.com/trending?l=Euphoria"
    },
    "F#": {
        "colour": "#b845fc",
        "url": "https://github.com/trending?l=Fsharp"
    },
    "F*": {
        "colour": "#572e30",
        "url": "https://github.com/trending?l=F*"
    },
    "Factor": {
        "colour": "#636746",
        "url": "https://github.com/trending?l=Factor"
    },
    "Fancy": {
        "colour": "#7b9db4",
        "url": "https://github.com/trending?l=Fancy"
    },
    "Fantom": {
        "colour": "#14253c",
        "url": "https://github.com/trending?l=Fantom"
    },
    "Faust": {
        "colour": "#c37240",
        "url": "https://github.com/trending?l=Faust"
    },
    "Fennel": {
        "colour": "#fff3d7",
        "url": "https://github.com/trending?l=Fennel"
    },
    "FIGlet Font": {
        "colour": "#FFDDBB",
        "url": "https://github.com/trending?l=FIGlet-Font"
    },
    "Filebench WML": {
        "colour": "#F6B900",
        "url": "https://github.com/trending?l=Filebench-WML"
    },
    "Filterscript": {
        "colour": null,
        "url": "https://github.com/trending?l=Filterscript"
    },
    "fish": {
        "colour": "#4aae47",
        "url": "https://github.com/trending?l=fish"
    },
    "Fluent": {
        "colour": "#ffcc33",
        "url": "https://github.com/trending?l=Fluent"
    },
    "FLUX": {
        "colour": "#88ccff",
        "url": "https://github.com/trending?l=FLUX"
    },
    "Forth": {
        "colour": "#341708",
        "url": "https://github.com/trending?l=Forth"
    },
    "Fortran": {
        "colour": "#4d41b1",
        "url": "https://github.com/trending?l=Fortran"
    },
    "Fortran Free Form": {
        "colour": "#4d41b1",
        "url": "https://github.com/trending?l=Fortran-Free-Form"
    },
    "FreeBasic": {
        "colour": "#141AC9",
        "url": "https://github.com/trending?l=FreeBasic"
    },
    "FreeMarker": {
        "colour": "#0050b2",
        "url": "https://github.com/trending?l=FreeMarker"
    },
    "Frege": {
        "colour": "#00cafe",
        "url": "https://github.com/trending?l=Frege"
    },
    "Futhark": {
        "colour": "#5f021f",
        "url": "https://github.com/trending?l=Futhark"
    },
    "G-code": {
        "colour": "#D08CF2",
        "url": "https://github.com/trending?l=G-code"
    },
    "Game Maker Language": {
        "colour": "#71b417",
        "url": "https://github.com/trending?l=Game-Maker-Language"
    },
    "GAML": {
        "colour": "#FFC766",
        "url": "https://github.com/trending?l=GAML"
    },
    "GAMS": {
        "colour": "#f49a22",
        "url": "https://github.com/trending?l=GAMS"
    },
    "GAP": {
        "colour": "#0000cc",
        "url": "https://github.com/trending?l=GAP"
    },
    "GCC Machine Description": {
        "colour": "#FFCFAB",
        "url": "https://github.com/trending?l=GCC-Machine-Description"
    },
    "GDB": {
        "colour": null,
        "url": "https://github.com/trending?l=GDB"
    },
    "GDScript": {
        "colour": "#355570",
        "url": "https://github.com/trending?l=GDScript"
    },
    "GEDCOM": {
        "colour": "#003058",
        "url": "https://github.com/trending?l=GEDCOM"
    },
    "Gemfile.lock": {
        "colour": "#701516",
        "url": "https://github.com/trending?l=Gemfile.lock"
    },
    "Gemini": {
        "colour": "#ff6900",
        "url": "https://github.com/trending?l=Gemini"
    },
    "Genero": {
        "colour": "#63408e",
        "url": "https://github.com/trending?l=Genero"
    },
    "Genero Forms": {
        "colour": "#d8df39",
        "url": "https://github.com/trending?l=Genero-Forms"
    },
    "Genie": {
        "colour": "#fb855d",
        "url": "https://github.com/trending?l=Genie"
    },
    "Genshi": {
        "colour": "#951531",
        "url": "https://github.com/trending?l=Genshi"
    },
    "Gentoo Ebuild": {
        "colour": "#9400ff",
        "url": "https://github.com/trending?l=Gentoo-Ebuild"
    },
    "Gentoo Eclass": {
        "colour": "#9400ff",
        "url": "https://github.com/trending?l=Gentoo-Eclass"
    },
    "Gerber Image": {
        "colour": "#d20b00",
        "url": "https://github.com/trending?l=Gerber-Image"
    },
    "Gherkin": {
        "colour": "#5B2063",
        "url": "https://github.com/trending?l=Gherkin"
    },
    "Git Attributes": {
        "colour": "#F44D27",
        "url": "https://github.com/trending?l=Git-Attributes"
    },
    "Git Config": {
        "colour": "#F44D27",
        "url": "https://github.com/trending?l=Git-Config"
    },
    "Git Revision List": {
        "colour": "#F44D27",
        "url": "https://github.com/trending?l=Git-Revision-List"
    },
    "Gleam": {
        "colour": "#ffaff3",
        "url": "https://github.com/trending?l=Gleam"
    },
    "GLSL": {
        "colour": "#5686a5",
        "url": "https://github.com/trending?l=GLSL"
    },
    "Glyph": {
        "colour": "#c1ac7f",
        "url": "https://github.com/trending?l=Glyph"
    },
    "Gnuplot": {
        "colour": "#f0a9f0",
        "url": "https://github.com/trending?l=Gnuplot"
    },
    "Go": {
        "colour": "#00ADD8",
        "url": "https://github.com/trending?l=Go"
    },
    "Go Checksums": {
        "colour": "#00ADD8",
        "url": "https://github.com/trending?l=Go-Checksums"
    },
    "Go Module": {
        "colour": "#00ADD8",
        "url": "https://github.com/trending?l=Go-Module"
    },
    "Godot Resource": {
        "colour": "#355570",
        "url": "https://github.com/trending?l=Godot-Resource"
    },
    "Golo": {
        "colour": "#88562A",
        "url": "https://github.com/trending?l=Golo"
    },
    "Gosu": {
        "colour": "#82937f",
        "url": "https://github.com/trending?l=Gosu"
    },
    "Grace": {
        "colour": "#615f8b",
        "url": "https://github.com/trending?l=Grace"
    },
    "Gradle": {
        "colour": "#02303a",
        "url": "https://github.com/trending?l=Gradle"
    },
    "Grammatical Framework": {
        "colour": "#ff0000",
        "url": "https://github.com/trending?l=Grammatical-Framework"
    },
    "GraphQL": {
        "colour": "#e10098",
        "url": "https://github.com/trending?l=GraphQL"
    },
    "Graphviz (DOT)": {
        "colour": "#2596be",
        "url": "https://github.com/trending?l=Graphviz-(DOT)"
    },
    "Groovy": {
        "colour": "#4298b8",
        "url": "https://github.com/trending?l=Groovy"
    },
    "Groovy Server Pages": {
        "colour": "#4298b8",
        "url": "https://github.com/trending?l=Groovy-Server-Pages"
    },
    "GSC": {
        "colour": "#FF6800",
        "url": "https://github.com/trending?l=GSC"
    },
    "Hack": {
        "colour": "#878787",
        "url": "https://github.com/trending?l=Hack"
    },
    "Haml": {
        "colour": "#ece2a9",
        "url": "https://github.com/trending?l=Haml"
    },
    "Handlebars": {
        "colour": "#f7931e",
        "url": "https://github.com/trending?l=Handlebars"
    },
    "HAProxy": {
        "colour": "#106da9",
        "url": "https://github.com/trending?l=HAProxy"
    },
    "Harbour": {
        "colour": "#0e60e3",
        "url": "https://github.com/trending?l=Harbour"
    },
    "Haskell": {
        "colour": "#5e5086",
        "url": "https://github.com/trending?l=Haskell"
    },
    "Haxe": {
        "colour": "#df7900",
        "url": "https://github.com/trending?l=Haxe"
    },
    "HCL": {
        "colour": "#844FBA",
        "url": "https://github.com/trending?l=HCL"
    },
    "HiveQL": {
        "colour": "#dce200",
        "url": "https://github.com/trending?l=HiveQL"
    },
    "HLSL": {
        "colour": "#aace60",
        "url": "https://github.com/trending?l=HLSL"
    },
    "HOCON": {
        "colour": "#9ff8ee",
        "url": "https://github.com/trending?l=HOCON"
    },
    "HolyC": {
        "colour": "#ffefaf",
        "url": "https://github.com/trending?l=HolyC"
    },
    "hoon": {
        "colour": "#00b171",
        "url": "https://github.com/trending?l=hoon"
    },
    "HTML": {
        "colour": "#e34c26",
        "url": "https://github.com/trending?l=HTML"
    },
    "HTML+ECR": {
        "colour": "#2e1052",
        "url": "https://github.com/trending?l=HTML+ECR"
    },
    "HTML+EEX": {
        "colour": "#6e4a7e",
        "url": "https://github.com/trending?l=HTML+EEX"
    },
    "HTML+ERB": {
        "colour": "#701516",
        "url": "https://github.com/trending?l=HTML+ERB"
    },
    "HTML+PHP": {
        "colour": "#4f5d95",
        "url": "https://github.com/trending?l=HTML+PHP"
    },
    "HTML+Razor": {
        "colour": "#512be4",
        "url": "https://github.com/trending?l=HTML+Razor"
    },
    "HTTP": {
        "colour": "#005C9C",
        "url": "https://github.com/trending?l=HTTP"
    },
    "HXML": {
        "colour": "#f68712",
        "url": "https://github.com/trending?l=HXML"
    },
    "Hy": {
        "colour": "#7790B2",
        "url": "https://github.com/trending?l=Hy"
    },
    "HyPhy": {
        "colour": null,
        "url": "https://github.com/trending?l=HyPhy"
    },
    "IDL": {
        "colour": "#a3522f",
        "url": "https://github.com/trending?l=IDL"
    },
    "Idris": {
        "colour": "#b30000",
        "url": "https://github.com/trending?l=Idris"
    },
    "Ignore List": {
        "colour": "#000000",
        "url": "https://github.com/trending?l=Ignore-List"
    },
    "IGOR Pro": {
        "colour": "#0000cc",
        "url": "https://github.com/trending?l=IGOR-Pro"
    },
    "ImageJ Macro": {
        "colour": "#99AAFF",
        "url": "https://github.com/trending?l=ImageJ-Macro"
    },
    "Imba": {
        "colour": "#16cec6",
        "url": "https://github.com/trending?l=Imba"
    },
    "Inform 7": {
        "colour": null,
        "url": "https://github.com/trending?l=Inform-7"
    },
    "INI": {
        "colour": "#d1dbe0",
        "url": "https://github.com/trending?l=INI"
    },
    "Ink": {
        "colour": null,
        "url": "https://github.com/trending?l=Ink"
    },
    "Inno Setup": {
        "colour": "#264b99",
        "url": "https://github.com/trending?l=Inno-Setup"
    },
    "Io": {
        "colour": "#a9188d",
        "url": "https://github.com/trending?l=Io"
    },
    "Ioke": {
        "colour": "#078193",
        "url": "https://github.com/trending?l=Ioke"
    },
    "Isabelle": {
        "colour": "#FEFE00",
        "url": "https://github.com/trending?l=Isabelle"
    },
    "Isabelle ROOT": {
        "colour": "#FEFE00",
        "url": "https://github.com/trending?l=Isabelle-ROOT"
    },
    "J": {
        "colour": "#9EEDFF",
        "url": "https://github.com/trending?l=J"
    },
    "Janet": {
        "colour": "#0886a5",
        "url": "https://github.com/trending?l=Janet"
    },
    "JAR Manifest": {
        "colour": "#b07219",
        "url": "https://github.com/trending?l=JAR-Manifest"
    },
    "Jasmin": {
        "colour": "#d03600",
        "url": "https://github.com/trending?l=Jasmin"
    },
    "Java": {
        "colour": "#b07219",
        "url": "https://github.com/trending?l=Java"
    },
    "Java Properties": {
        "colour": "#2A6277",
        "url": "https://github.com/trending?l=Java-Properties"
    },
    "Java Server Pages": {
        "colour": "#2A6277",
        "url": "https://github.com/trending?l=Java-Server-Pages"
    },
    "JavaScript": {
        "colour": "#f1e05a",
        "url": "https://github.com/trending?l=JavaScript"
    },
    "JavaScript+ERB": {
        "colour": "#f1e05a",
        "url": "https://github.com/trending?l=JavaScript+ERB"
    },
    "JCL": {
        "colour": "#d90e09",
        "url": "https://github.com/trending?l=JCL"
    },
    "Jest Snapshot": {
        "colour": "#15c213",
        "url": "https://github.com/trending?l=Jest-Snapshot"
    },
    "JetBrains MPS": {
        "colour": "#21D789",
        "url": "https://github.com/trending?l=JetBrains-MPS"
    },
    "JFlex": {
        "colour": "#DBCA00",
        "url": "https://github.com/trending?l=JFlex"
    },
    "Jinja": {
        "colour": "#a52a22",
        "url": "https://github.com/trending?l=Jinja"
    },
    "Jison": {
        "colour": "#56b3cb",
        "url": "https://github.com/trending?l=Jison"
    },
    "Jison Lex": {
        "colour": "#56b3cb",
        "url": "https://github.com/trending?l=Jison-Lex"
    },
    "Jolie": {
        "colour": "#843179",
        "url": "https://github.com/trending?l=Jolie"
    },
    "jq": {
        "colour": "#c7254e",
        "url": "https://github.com/trending?l=jq"
    },
    "JSON": {
        "colour": "#292929",
        "url": "https://github.com/trending?l=JSON"
    },
    "JSON with Comments": {
        "colour": "#292929",
        "url": "https://github.com/trending?l=JSON-with-Comments"
    },
    "JSON5": {
        "colour": "#267CB9",
        "url": "https://github.com/trending?l=JSON5"
    },
    "JSONiq": {
        "colour": "#40d47e",
        "url": "https://github.com/trending?l=JSONiq"
    },
    "JSONLD": {
        "colour": "#0c479c",
        "url": "https://github.com/trending?l=JSONLD"
    },
    "Jsonnet": {
        "colour": "#0064bd",
        "url": "https://github.com/trending?l=Jsonnet"
    },
    "Julia": {
        "colour": "#a270ba",
        "url": "https://github.com/trending?l=Julia"
    },
    "Jupyter Notebook": {
        "colour": "#DA5B0B",
        "url": "https://github.com/trending?l=Jupyter-Notebook"
    },
    "Just": {
        "colour": "#384d54",
        "url": "https://github.com/trending?l=Just"
    },
    "Kaitai Struct": {
        "colour": "#773b37",
        "url": "https://github.com/trending?l=Kaitai-Struct"
    },
    "KakouneScript": {
        "colour": "#6f8042",
        "url": "https://github.com/trending?l=KakouneScript"
    },
    "KerboScript": {
        "colour": "#41adf0",
        "url": "https://github.com/trending?l=KerboScript"
    },
    "KiCad Layout": {
        "colour": "#2f4aab",
        "url": "https://github.com/trending?l=KiCad-Layout"
    },
    "KiCad Legacy Layout": {
        "colour": "#2f4aab",
        "url": "https://github.com/trending?l=KiCad-Legacy-Layout"
    },
    "KiCad Schematic": {
        "colour": "#2f4aab",
        "url": "https://github.com/trending?l=KiCad-Schematic"
    },
    "Kotlin": {
        "colour": "#A97BFF",
        "url": "https://github.com/trending?l=Kotlin"
    },
    "KRL": {
        "colour": "#28430A",
        "url": "https://github.com/trending?l=KRL"
    },
    "kvlang": {
        "colour": "#1da6e0",
        "url": "https://github.com/trending?l=kvlang"
    },
    "LabVIEW": {
        "colour": "#fede06",
        "url": "https://github.com/trending?l=LabVIEW"
    },
    "Lark": {
        "colour": "#2980B9",
        "url": "https://github.com/trending?l=Lark"
    },
    "Lasso": {
        "colour": "#999999",
        "url": "https://github.com/trending?l=Lasso"
    },
    "Latte": {
        "colour": "#f2a542",
        "url": "https://github.com/trending?l=Latte"
    },
    "Lean": {
        "colour": null,
        "url": "https://github.com/trending?l=Lean"
    },
    "Less": {
        "colour": "#1d365d",
        "url": "https://github.com/trending?l=Less"
    },
    "Lex": {
        "colour": "#DBCA00",
        "url": "https://github.com/trending?l=Lex"
    },
    "LFE": {
        "colour": "#4C3023",
        "url": "https://github.com/trending?l=LFE"
    },
    "LigoLANG": {
        "colour": "#0e74ff",
        "url": "https://github.com/trending?l=LigoLANG"
    },
    "LilyPond": {
        "colour": "#9ccc7c",
        "url": "https://github.com/trending?l=LilyPond"
    },
    "Limbo": {
        "colour": null,
        "url": "https://github.com/trending?l=Limbo"
    },
    "Liquid": {
        "colour": "#67b8de",
        "url": "https://github.com/trending?l=Liquid"
    },
    "Literate Agda": {
        "colour": "#315665",
        "url": "https://github.com/trending?l=Literate-Agda"
    },
    "Literate CoffeeScript": {
        "colour": "#244776",
        "url": "https://github.com/trending?l=Literate-CoffeeScript"
    },
    "Literate Haskell": {
        "colour": "#5e5086",
        "url": "https://github.com/trending?l=Literate-Haskell"
    },
    "LiveScript": {
        "colour": "#499886",
        "url": "https://github.com/trending?l=LiveScript"
    },
    "LLVM": {
        "colour": "#185619",
        "url": "https://github.com/trending?l=LLVM"
    },
    "Logos": {
        "colour": null,
        "url": "https://github.com/trending?l=Logos"
    },
    "Logtalk": {
        "colour": "#295b9a",
        "url": "https://github.com/trending?l=Logtalk"
    },
    "LOLCODE": {
        "colour": "#cc9900",
        "url": "https://github.com/trending?l=LOLCODE"
    },
    "LookML": {
        "colour": "#652B81",
        "url": "https://github.com/trending?l=LookML"
    },
    "LoomScript": {
        "colour": null,
        "url": "https://github.com/trending?l=LoomScript"
    },
    "LSL": {
        "colour": "#3d9970",
        "url": "https://github.com/trending?l=LSL"
    },
    "Lua": {
        "colour": "#000080",
        "url": "https://github.com/trending?l=Lua"
    },
    "M": {
        "colour": null,
        "url": "https://github.com/trending?l=M"
    },
    "M4": {
        "colour": null,
        "url": "https://github.com/trending?l=M4"
    },
    "M4Sugar": {
        "colour": null,
        "url": "https://github.com/trending?l=M4Sugar"
    },
    "Macaulay2": {
        "colour": "#d8ffff",
        "url": "https://github.com/trending?l=Macaulay2"
    },
    "Makefile": {
        "colour": "#427819",
        "url": "https://github.com/trending?l=Makefile"
    },
    "Mako": {
        "colour": "#7e858d",
        "url": "https://github.com/trending?l=Mako"
    },
    "Markdown": {
        "colour": "#083fa1",
        "url": "https://github.com/trending?l=Markdown"
    },
    "Marko": {
        "colour": "#42bff2",
        "url": "https://github.com/trending?l=Marko"
    },
    "Mask": {
        "colour": "#f97732",
        "url": "https://github.com/trending?l=Mask"
    },
    "Mathematica": {
        "colour": "#dd1100",
        "url": "https://github.com/trending?l=Mathematica"
    },
    "MATLAB": {
        "colour": "#e16737",
        "url": "https://github.com/trending?l=MATLAB"
    },
    "Max": {
        "colour": "#c4a79c",
        "url": "https://github.com/trending?l=Max"
    },
    "MAXScript": {
        "colour": "#00a6a6",
        "url": "https://github.com/trending?l=MAXScript"
    },
    "mcfunction": {
        "colour": "#E22837",
        "url": "https://github.com/trending?l=mcfunction"
    },
    "Mercury": {
        "colour": "#ff2b2b",
        "url": "https://github.com/trending?l=Mercury"
    },
    "Mermaid": {
        "colour": "#ff3670",
        "url": "https://github.com/trending?l=Mermaid"
    },
    "Meson": {
        "colour": "#007800",
        "url": "https://github.com/trending?l=Meson"
    },
    "Metal": {
        "colour": "#8f14e9",
        "url": "https://github.com/trending?l=Metal"
    },
    "MiniD": {
        "colour": null,
        "url": "https://github.com/trending?l=MiniD"
    },
    "MiniYAML": {
        "colour": "#ff1111",
        "url": "https://github.com/trending?l=MiniYAML"
    },
    "Mint": {
        "colour": "#02b046",
        "url": "https://github.com/trending?l=Mint"
    },
    "Mirah": {
        "colour": "#c7a938",
        "url": "https://github.com/trending?l=Mirah"
    },
    "mIRC Script": {
        "colour": "#3d57c3",
        "url": "https://github.com/trending?l=mIRC-Script"
    },
    "MLIR": {
        "colour": "#5EC8DB",
        "url": "https://github.com/trending?l=MLIR"
    },
    "Modelica": {
        "colour": "#de1d31",
        "url": "https://github.com/trending?l=Modelica"
    },
    "Modula-2": {
        "colour": "#10253f",
        "url": "https://github.com/trending?l=Modula-2"
    },
    "Modula-3": {
        "colour": "#223388",
        "url": "https://github.com/trending?l=Modula-3"
    },
    "Module Management System": {
        "colour": null,
        "url": "https://github.com/trending?l=Module-Management-System"
    },
    "Monkey": {
        "colour": null,
        "url": "https://github.com/trending?l=Monkey"
    },
    "Monkey C": {
        "colour": "#8D6747",
        "url": "https://github.com/trending?l=Monkey-C"
    },
    "Moocode": {
        "colour": null,
        "url": "https://github.com/trending?l=Moocode"
    },
    "MoonScript": {
        "colour": "#ff4585",
        "url": "https://github.com/trending?l=MoonScript"
    },
    "Motoko": {
        "colour": "#fbb03b",
        "url": "https://github.com/trending?l=Motoko"
    },
    "Motorola 68K Assembly": {
        "colour": "#005daa",
        "url": "https://github.com/trending?l=Motorola-68K-Assembly"
    },
    "Move": {
        "colour": "#4a137a",
        "url": "https://github.com/trending?l=Move"
    },
    "MQL4": {
        "colour": "#62A8D6",
        "url": "https://github.com/trending?l=MQL4"
    },
    "MQL5": {
        "colour": "#4A76B8",
        "url": "https://github.com/trending?l=MQL5"
    },
    "MTML": {
        "colour": "#b7e1f4",
        "url": "https://github.com/trending?l=MTML"
    },
    "MUF": {
        "colour": null,
        "url": "https://github.com/trending?l=MUF"
    },
    "mupad": {
        "colour": "#244963",
        "url": "https://github.com/trending?l=mupad"
    },
    "Mustache": {
        "colour": "#724b3b",
        "url": "https://github.com/trending?l=Mustache"
    },
    "Myghty": {
        "colour": null,
        "url": "https://github.com/trending?l=Myghty"
    },
    "nanorc": {
        "colour": "#2d004d",
        "url": "https://github.com/trending?l=nanorc"
    },
    "Nasal": {
        "colour": "#1d2c4e",
        "url": "https://github.com/trending?l=Nasal"
    },
    "NASL": {
        "colour": null,
        "url": "https://github.com/trending?l=NASL"
    },
    "NCL": {
        "colour": "#28431f",
        "url": "https://github.com/trending?l=NCL"
    },
    "Nearley": {
        "colour": "#990000",
        "url": "https://github.com/trending?l=Nearley"
    },
    "Nemerle": {
        "colour": "#3d3c6e",
        "url": "https://github.com/trending?l=Nemerle"
    },
    "nesC": {
        "colour": "#94B0C7",
        "url": "https://github.com/trending?l=nesC"
    },
    "NetLinx": {
        "colour": "#0aa0ff",
        "url": "https://github.com/trending?l=NetLinx"
    },
    "NetLinx+ERB": {
        "colour": "#747faa",
        "url": "https://github.com/trending?l=NetLinx+ERB"
    },
    "NetLogo": {
        "colour": "#ff6375",
        "url": "https://github.com/trending?l=NetLogo"
    },
    "NewLisp": {
        "colour": "#87AED7",
        "url": "https://github.com/trending?l=NewLisp"
    },
    "Nextflow": {
        "colour": "#3ac486",
        "url": "https://github.com/trending?l=Nextflow"
    },
    "Nginx": {
        "colour": "#009639",
        "url": "https://github.com/trending?l=Nginx"
    },
    "Nim": {
        "colour": "#ffc200",
        "url": "https://github.com/trending?l=Nim"
    },
    "Nit": {
        "colour": "#009917",
        "url": "https://github.com/trending?l=Nit"
    },
    "Nix": {
        "colour": "#7e7eff",
        "url": "https://github.com/trending?l=Nix"
    },
    "NPM Config": {
        "colour": "#cb3837",
        "url": "https://github.com/trending?l=NPM-Config"
    },
    "NSIS": {
        "colour": null,
        "url": "https://github.com/trending?l=NSIS"
    },
    "Nu": {
        "colour": "#c9df40",
        "url": "https://github.com/trending?l=Nu"
    },
    "NumPy": {
        "colour": "#9C8AF9",
        "url": "https://github.com/trending?l=NumPy"
    },
    "Nunjucks": {
        "colour": "#3d8137",
        "url": "https://github.com/trending?l=Nunjucks"
    },
    "NWScript": {
        "colour": "#111522",
        "url": "https://github.com/trending?l=NWScript"
    },
    "OASv2-json": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OASv2-json"
    },
    "OASv2-yaml": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OASv2-yaml"
    },
    "OASv3-json": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OASv3-json"
    },
    "OASv3-yaml": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OASv3-yaml"
    },
    "Objective-C": {
        "colour": "#438eff",
        "url": "https://github.com/trending?l=Objective-C"
    },
    "Objective-C++": {
        "colour": "#6866fb",
        "url": "https://github.com/trending?l=Objective-C++"
    },
    "Objective-J": {
        "colour": "#ff0c5a",
        "url": "https://github.com/trending?l=Objective-J"
    },
    "ObjectScript": {
        "colour": "#424893",
        "url": "https://github.com/trending?l=ObjectScript"
    },
    "OCaml": {
        "colour": "#3be133",
        "url": "https://github.com/trending?l=OCaml"
    },
    "Odin": {
        "colour": "#60AFFE",
        "url": "https://github.com/trending?l=Odin"
    },
    "Omgrofl": {
        "colour": "#cabbff",
        "url": "https://github.com/trending?l=Omgrofl"
    },
    "ooc": {
        "colour": "#b0b77e",
        "url": "https://github.com/trending?l=ooc"
    },
    "Opa": {
        "colour": null,
        "url": "https://github.com/trending?l=Opa"
    },
    "Opal": {
        "colour": "#f7ede0",
        "url": "https://github.com/trending?l=Opal"
    },
    "Open Policy Agent": {
        "colour": "#7d9199",
        "url": "https://github.com/trending?l=Open-Policy-Agent"
    },
    "OpenAPI Specification v2": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OpenAPI-Specification-v2"
    },
    "OpenAPI Specification v3": {
        "colour": "#85ea2d",
        "url": "https://github.com/trending?l=OpenAPI-Specification-v3"
    },
    "OpenCL": {
        "colour": "#ed2e2d",
        "url": "https://github.com/trending?l=OpenCL"
    },
    "OpenEdge ABL": {
        "colour": "#5ce600",
        "url": "https://github.com/trending?l=OpenEdge-ABL"
    },
    "OpenQASM": {
        "colour": "#AA70FF",
        "url": "https://github.com/trending?l=OpenQASM"
    },
    "OpenRC runscript": {
        "colour": null,
        "url": "https://github.com/trending?l=OpenRC-runscript"
    },
    "OpenSCAD": {
        "colour": "#e5cd45",
        "url": "https://github.com/trending?l=OpenSCAD"
    },
    "Option List": {
        "colour": "#476732",
        "url": "https://github.com/trending?l=Option-List"
    },
    "Org": {
        "colour": "#77aa99",
        "url": "https://github.com/trending?l=Org"
    },
    "Ox": {
        "colour": null,
        "url": "https://github.com/trending?l=Ox"
    },
    "Oxygene": {
        "colour": "#cdd0e3",
        "url": "https://github.com/trending?l=Oxygene"
    },
    "Oz": {
        "colour": "#fab738",
        "url": "https://github.com/trending?l=Oz"
    },
    "P4": {
        "colour": "#7055b5",
        "url": "https://github.com/trending?l=P4"
    },
    "Pan": {
        "colour": "#cc0000",
        "url": "https://github.com/trending?l=Pan"
    },
    "Papyrus": {
        "colour": "#6600cc",
        "url": "https://github.com/trending?l=Papyrus"
    },
    "Parrot": {
        "colour": "#f3ca0a",
        "url": "https://github.com/trending?l=Parrot"
    },
    "Parrot Assembly": {
        "colour": null,
        "url": "https://github.com/trending?l=Parrot-Assembly"
    },
    "Parrot Internal Representation": {
        "colour": null,
        "url": "https://github.com/trending?l=Parrot-Internal-Representation"
    },
    "Pascal": {
        "colour": "#E3F171",
        "url": "https://github.com/trending?l=Pascal"
    },
    "Pawn": {
        "colour": "#dbb284",
        "url": "https://github.com/trending?l=Pawn"
    },
    "PDDL": {
        "colour": "#0d00ff",
        "url": "https://github.com/trending?l=PDDL"
    },
    "PEG.js": {
        "colour": "#234d6b",
        "url": "https://github.com/trending?l=PEG.js"
    },
    "Pep8": {
        "colour": "#C76F5B",
        "url": "https://github.com/trending?l=Pep8"
    },
    "Perl": {
        "colour": "#0298c3",
        "url": "https://github.com/trending?l=Perl"
    },
    "PHP": {
        "colour": "#4F5D95",
        "url": "https://github.com/trending?l=PHP"
    },
    "PicoLisp": {
        "colour": "#6067af",
        "url": "https://github.com/trending?l=PicoLisp"
    },
    "PigLatin": {
        "colour": "#fcd7de",
        "url": "https://github.com/trending?l=PigLatin"
    },
    "Pike": {
        "colour": "#005390",
        "url": "https://github.com/trending?l=Pike"
    },
    "PlantUML": {
        "colour": "#fbbd16",
        "url": "https://github.com/trending?l=PlantUML"
    },
    "PLpgSQL": {
        "colour": "#336790",
        "url": "https://github.com/trending?l=PLpgSQL"
    },
    "PLSQL": {
        "colour": "#dad8d8",
        "url": "https://github.com/trending?l=PLSQL"
    },
    "PogoScript": {
        "colour": "#d80074",
        "url": "https://github.com/trending?l=PogoScript"
    },
    "Polar": {
        "colour": "#ae81ff",
        "url": "https://github.com/trending?l=Polar"
    },
    "Pony": {
        "colour": null,
        "url": "https://github.com/trending?l=Pony"
    },
    "Portugol": {
        "colour": "#f8bd00",
        "url": "https://github.com/trending?l=Portugol"
    },
    "PostCSS": {
        "colour": "#dc3a0c",
        "url": "https://github.com/trending?l=PostCSS"
    },
    "PostScript": {
        "colour": "#da291c",
        "url": "https://github.com/trending?l=PostScript"
    },
    "POV-Ray SDL": {
        "colour": "#6bac65",
        "url": "https://github.com/trending?l=POV-Ray-SDL"
    },
    "PowerBuilder": {
        "colour": "#8f0f8d",
        "url": "https://github.com/trending?l=PowerBuilder"
    },
    "PowerShell": {
        "colour": "#012456",
        "url": "https://github.com/trending?l=PowerShell"
    },
    "Prisma": {
        "colour": "#0c344b",
        "url": "https://github.com/trending?l=Prisma"
    },
    "Processing": {
        "colour": "#0096D8",
        "url": "https://github.com/trending?l=Processing"
    },
    "Procfile": {
        "colour": "#3B2F63",
        "url": "https://github.com/trending?l=Procfile"
    },
    "Prolog": {
        "colour": "#74283c",
        "url": "https://github.com/trending?l=Prolog"
    },
    "Promela": {
        "colour": "#de0000",
        "url": "https://github.com/trending?l=Promela"
    },
    "Propeller Spin": {
        "colour": "#7fa2a7",
        "url": "https://github.com/trending?l=Propeller-Spin"
    },
    "Pug": {
        "colour": "#a86454",
        "url": "https://github.com/trending?l=Pug"
    },
    "Puppet": {
        "colour": "#302B6D",
        "url": "https://github.com/trending?l=Puppet"
    },
    "PureBasic": {
        "colour": "#5a6986",
        "url": "https://github.com/trending?l=PureBasic"
    },
    "PureScript": {
        "colour": "#1D222D",
        "url": "https://github.com/trending?l=PureScript"
    },
    "Pyret": {
        "colour": "#ee1e10",
        "url": "https://github.com/trending?l=Pyret"
    },
    "Python": {
        "colour": "#3572A5",
        "url": "https://github.com/trending?l=Python"
    },
    "Python console": {
        "colour": "#3572A5",
        "url": "https://github.com/trending?l=Python-console"
    },
    "Python traceback": {
        "colour": "#3572A5",
        "url": "https://github.com/trending?l=Python-traceback"
    },
    "q": {
        "colour": "#0040cd",
        "url": "https://github.com/trending?l=q"
    },
    "Q#": {
        "colour": "#fed659",
        "url": "https://github.com/trending?l=Qsharp"
    },
    "QMake": {
        "colour": null,
        "url": "https://github.com/trending?l=QMake"
    },
    "QML": {
        "colour": "#44a51c",
        "url": "https://github.com/trending?l=QML"
    },
    "Qt Script": {
        "colour": "#00b841",
        "url": "https://github.com/trending?l=Qt-Script"
    },
    "Quake": {
        "colour": "#882233",
        "url": "https://github.com/trending?l=Quake"
    },
    "R": {
        "colour": "#198CE7",
        "url": "https://github.com/trending?l=R"
    },
    "Racket": {
        "colour": "#3c5caa",
        "url": "https://github.com/trending?l=Racket"
    },
    "Ragel": {
        "colour": "#9d5200",
        "url": "https://github.com/trending?l=Ragel"
    },
    "Raku": {
        "colour": "#0000fb",
        "url": "https://github.com/trending?l=Raku"
    },
    "RAML": {
        "colour": "#77d9fb",
        "url": "https://github.com/trending?l=RAML"
    },
    "Rascal": {
        "colour": "#fffaa0",
        "url": "https://github.com/trending?l=Rascal"
    },
    "RDoc": {
        "colour": "#701516",
        "url": "https://github.com/trending?l=RDoc"
    },
    "REALbasic": {
        "colour": null,
        "url": "https://github.com/trending?l=REALbasic"
    },
    "Reason": {
        "colour": "#ff5847",
        "url": "https://github.com/trending?l=Reason"
    },
    "ReasonLIGO": {
        "colour": "#ff5847",
        "url": "https://github.com/trending?l=ReasonLIGO"
    },
    "Rebol": {
        "colour": "#358a5b",
        "url": "https://github.com/trending?l=Rebol"
    },
    "Record Jar": {
        "colour": "#0673ba",
        "url": "https://github.com/trending?l=Record-Jar"
    },
    "Red": {
        "colour": "#f50000",
        "url": "https://github.com/trending?l=Red"
    },
    "Redcode": {
        "colour": null,
        "url": "https://github.com/trending?l=Redcode"
    },
    "Regular Expression": {
        "colour": "#009a00",
        "url": "https://github.com/trending?l=Regular-Expression"
    },
    "Ren'Py": {
        "colour": "#ff7f7f",
        "url": "https://github.com/trending?l=Ren'Py"
    },
    "RenderScript": {
        "colour": null,
        "url": "https://github.com/trending?l=RenderScript"
    },
    "ReScript": {
        "colour": "#ed5051",
        "url": "https://github.com/trending?l=ReScript"
    },
    "reStructuredText": {
        "colour": "#141414",
        "url": "https://github.com/trending?l=reStructuredText"
    },
    "REXX": {
        "colour": "#d90e09",
        "url": "https://github.com/trending?l=REXX"
    },
    "Ring": {
        "colour": "#2D54CB",
        "url": "https://github.com/trending?l=Ring"
    },
    "Riot": {
        "colour": "#A71E49",
        "url": "https://github.com/trending?l=Riot"
    },
    "RMarkdown": {
        "colour": "#198ce7",
        "url": "https://github.com/trending?l=RMarkdown"
    },
    "RobotFramework": {
        "colour": "#00c0b5",
        "url": "https://github.com/trending?l=RobotFramework"
    },
    "Roff": {
        "colour": "#ecdebe",
        "url": "https://github.com/trending?l=Roff"
    },
    "Roff Manpage": {
        "colour": "#ecdebe",
        "url": "https://github.com/trending?l=Roff-Manpage"
    },
    "Rouge": {
        "colour": "#cc0088",
        "url": "https://github.com/trending?l=Rouge"
    },
    "RouterOS Script": {
        "colour": "#DE3941",
        "url": "https://github.com/trending?l=RouterOS-Script"
    },
    "RPC": {
        "colour": null,
        "url": "https://github.com/trending?l=RPC"
    },
    "RPGLE": {
        "colour": "#2BDE21",
        "url": "https://github.com/trending?l=RPGLE"
    },
    "Ruby": {
        "colour": "#701516",
        "url": "https://github.com/trending?l=Ruby"
    },
    "RUNOFF": {
        "colour": "#665a4e",
        "url": "https://github.com/trending?l=RUNOFF"
    },
    "Rust": {
        "colour": "#dea584",
        "url": "https://github.com/trending?l=Rust"
    },
    "Sage": {
        "colour": null,
        "url": "https://github.com/trending?l=Sage"
    },
    "SaltStack": {
        "colour": "#646464",
        "url": "https://github.com/trending?l=SaltStack"
    },
    "SAS": {
        "colour": "#B34936",
        "url": "https://github.com/trending?l=SAS"
    },
    "Sass": {
        "colour": "#a53b70",
        "url": "https://github.com/trending?l=Sass"
    },
    "Scala": {
        "colour": "#c22d40",
        "url": "https://github.com/trending?l=Scala"
    },
    "Scaml": {
        "colour": "#bd181a",
        "url": "https://github.com/trending?l=Scaml"
    },
    "Scenic": {
        "colour": "#fdc700",
        "url": "https://github.com/trending?l=Scenic"
    },
    "Scheme": {
        "colour": "#1e4aec",
        "url": "https://github.com/trending?l=Scheme"
    },
    "Scilab": {
        "colour": "#ca0f21",
        "url": "https://github.com/trending?l=Scilab"
    },
    "SCSS": {
        "colour": "#c6538c",
        "url": "https://github.com/trending?l=SCSS"
    },
    "sed": {
        "colour": "#64b970",
        "url": "https://github.com/trending?l=sed"
    },
    "Self": {
        "colour": "#0579aa",
        "url": "https://github.com/trending?l=Self"
    },
    "ShaderLab": {
        "colour": "#222c37",
        "url": "https://github.com/trending?l=ShaderLab"
    },
    "Shell": {
        "colour": "#89e051",
        "url": "https://github.com/trending?l=Shell"
    },
    "ShellCheck Config": {
        "colour": "#cecfcb",
        "url": "https://github.com/trending?l=ShellCheck-Config"
    },
    "ShellSession": {
        "colour": null,
        "url": "https://github.com/trending?l=ShellSession"
    },
    "Shen": {
        "colour": "#120F14",
        "url": "https://github.com/trending?l=Shen"
    },
    "Sieve": {
        "colour": null,
        "url": "https://github.com/trending?l=Sieve"
    },
    "Simple File Verification": {
        "colour": "#C9BFED",
        "url": "https://github.com/trending?l=Simple-File-Verification"
    },
    "Singularity": {
        "colour": "#64E6AD",
        "url": "https://github.com/trending?l=Singularity"
    },
    "Slash": {
        "colour": "#007eff",
        "url": "https://github.com/trending?l=Slash"
    },
    "Slice": {
        "colour": "#003fa2",
        "url": "https://github.com/trending?l=Slice"
    },
    "Slim": {
        "colour": "#2b2b2b",
        "url": "https://github.com/trending?l=Slim"
    },
    "Smali": {
        "colour": null,
        "url": "https://github.com/trending?l=Smali"
    },
    "Smalltalk": {
        "colour": "#596706",
        "url": "https://github.com/trending?l=Smalltalk"
    },
    "Smarty": {
        "colour": "#f0c040",
        "url": "https://github.com/trending?l=Smarty"
    },
    "Smithy": {
        "colour": "#c44536",
        "url": "https://github.com/trending?l=Smithy"
    },
    "SmPL": {
        "colour": "#c94949",
        "url": "https://github.com/trending?l=SmPL"
    },
    "SMT": {
        "colour": null,
        "url": "https://github.com/trending?l=SMT"
    },
    "Snakemake": {
        "colour": "#419179",
        "url": "https://github.com/trending?l=Snakemake"
    },
    "Solidity": {
        "colour": "#AA6746",
        "url": "https://github.com/trending?l=Solidity"
    },
    "SourcePawn": {
        "colour": "#f69e1d",
        "url": "https://github.com/trending?l=SourcePawn"
    },
    "SPARQL": {
        "colour": "#0C4597",
        "url": "https://github.com/trending?l=SPARQL"
    },
    "SQF": {
        "colour": "#3F3F3F",
        "url": "https://github.com/trending?l=SQF"
    },
    "SQL": {
        "colour": "#e38c00",
        "url": "https://github.com/trending?l=SQL"
    },
    "SQLPL": {
        "colour": "#e38c00",
        "url": "https://github.com/trending?l=SQLPL"
    },
    "Squirrel": {
        "colour": "#800000",
        "url": "https://github.com/trending?l=Squirrel"
    },
    "SRecode Template": {
        "colour": "#348a34",
        "url": "https://github.com/trending?l=SRecode-Template"
    },
    "Stan": {
        "colour": "#b2011d",
        "url": "https://github.com/trending?l=Stan"
    },
    "Standard ML": {
        "colour": "#dc566d",
        "url": "https://github.com/trending?l=Standard-ML"
    },
    "Starlark": {
        "colour": "#76d275",
        "url": "https://github.com/trending?l=Starlark"
    },
    "Stata": {
        "colour": "#1a5f91",
        "url": "https://github.com/trending?l=Stata"
    },
    "STL": {
        "colour": "#373b5e",
        "url": "https://github.com/trending?l=STL"
    },
    "StringTemplate": {
        "colour": "#3fb34f",
        "url": "https://github.com/trending?l=StringTemplate"
    },
    "Stylus": {
        "colour": "#ff6347",
        "url": "https://github.com/trending?l=Stylus"
    },
    "SubRip Text": {
        "colour": "#9e0101",
        "url": "https://github.com/trending?l=SubRip-Text"
    },
    "SugarSS": {
        "colour": "#2fcc9f",
        "url": "https://github.com/trending?l=SugarSS"
    },
    "SuperCollider": {
        "colour": "#46390b",
        "url": "https://github.com/trending?l=SuperCollider"
    },
    "Svelte": {
        "colour": "#ff3e00",
        "url": "https://github.com/trending?l=Svelte"
    },
    "SVG": {
        "colour": "#ff9900",
        "url": "https://github.com/trending?l=SVG"
    },
    "Sway": {
        "colour": "#dea584",
        "url": "https://github.com/trending?l=Sway"
    },
    "Swift": {
        "colour": "#F05138",
        "url": "https://github.com/trending?l=Swift"
    },
    "SWIG": {
        "colour": null,
        "url": "https://github.com/trending?l=SWIG"
    },
    "SystemVerilog": {
        "colour": "#DAE1C2",
        "url": "https://github.com/trending?l=SystemVerilog"
    },
    "Talon": {
        "colour": "#333333",
        "url": "https://github.com/trending?l=Talon"
    },
    "Tcl": {
        "colour": "#e4cc98",
        "url": "https://github.com/trending?l=Tcl"
    },
    "Tcsh": {
        "colour": null,
        "url": "https://github.com/trending?l=Tcsh"
    },
    "Terra": {
        "colour": "#00004c",
        "url": "https://github.com/trending?l=Terra"
    },
    "TeX": {
        "colour": "#3D6117",
        "url": "https://github.com/trending?l=TeX"
    },
    "Textile": {
        "colour": "#ffe7ac",
        "url": "https://github.com/trending?l=Textile"
    },
    "TextMate Properties": {
        "colour": "#df66e4",
        "url": "https://github.com/trending?l=TextMate-Properties"
    },
    "Thrift": {
        "colour": "#D12127",
        "url": "https://github.com/trending?l=Thrift"
    },
    "TI Program": {
        "colour": "#A0AA87",
        "url": "https://github.com/trending?l=TI-Program"
    },
    "TLA": {
        "colour": "#4b0079",
        "url": "https://github.com/trending?l=TLA"
    },
    "TOML": {
        "colour": "#9c4221",
        "url": "https://github.com/trending?l=TOML"
    },
    "TSQL": {
        "colour": "#e38c00",
        "url": "https://github.com/trending?l=TSQL"
    },
    "TSV": {
        "colour": "#237346",
        "url": "https://github.com/trending?l=TSV"
    },
    "TSX": {
        "colour": "#3178c6",
        "url": "https://github.com/trending?l=TSX"
    },
    "Turing": {
        "colour": "#cf142b",
        "url": "https://github.com/trending?l=Turing"
    },
    "Twig": {
        "colour": "#c1d026",
        "url": "https://github.com/trending?l=Twig"
    },
    "TXL": {
        "colour": "#0178b8",
        "url": "https://github.com/trending?l=TXL"
    },
    "TypeScript": {
        "colour": "#3178c6",
        "url": "https://github.com/trending?l=TypeScript"
    },
    "Unified Parallel C": {
        "colour": "#4e3617",
        "url": "https://github.com/trending?l=Unified-Parallel-C"
    },
    "Unity3D Asset": {
        "colour": "#222c37",
        "url": "https://github.com/trending?l=Unity3D-Asset"
    },
    "Unix Assembly": {
        "colour": null,
        "url": "https://github.com/trending?l=Unix-Assembly"
    },
    "Uno": {
        "colour": "#9933cc",
        "url": "https://github.com/trending?l=Uno"
    },
    "UnrealScript": {
        "colour": "#a54c4d",
        "url": "https://github.com/trending?l=UnrealScript"
    },
    "UrWeb": {
        "colour": "#ccccee",
        "url": "https://github.com/trending?l=UrWeb"
    },
    "V": {
        "colour": "#4f87c4",
        "url": "https://github.com/trending?l=V"
    },
    "Vala": {
        "colour": "#a56de2",
        "url": "https://github.com/trending?l=Vala"
    },
    "Valve Data Format": {
        "colour": "#f26025",
        "url": "https://github.com/trending?l=Valve-Data-Format"
    },
    "VBA": {
        "colour": "#867db1",
        "url": "https://github.com/trending?l=VBA"
    },
    "VBScript": {
        "colour": "#15dcdc",
        "url": "https://github.com/trending?l=VBScript"
    },
    "VCL": {
        "colour": "#148AA8",
        "url": "https://github.com/trending?l=VCL"
    },
    "Velocity Template Language": {
        "colour": "#507cff",
        "url": "https://github.com/trending?l=Velocity-Template-Language"
    },
    "Verilog": {
        "colour": "#b2b7f8",
        "url": "https://github.com/trending?l=Verilog"
    },
    "VHDL": {
        "colour": "#adb2cb",
        "url": "https://github.com/trending?l=VHDL"
    },
    "Vim Help File": {
        "colour": "#199f4b",
        "url": "https://github.com/trending?l=Vim-Help-File"
    },
    "Vim Script": {
        "colour": "#199f4b",
        "url": "https://github.com/trending?l=Vim-Script"
    },
    "Vim Snippet": {
        "colour": "#199f4b",
        "url": "https://github.com/trending?l=Vim-Snippet"
    },
    "Visual Basic .NET": {
        "colour": "#945db7",
        "url": "https://github.com/trending?l=Visual-Basic-.NET"
    },
    "Visual Basic 6.0": {
        "colour": "#2c6353",
        "url": "https://github.com/trending?l=Visual-Basic-6.0"
    },
    "Volt": {
        "colour": "#1F1F1F",
        "url": "https://github.com/trending?l=Volt"
    },
    "Vue": {
        "colour": "#41b883",
        "url": "https://github.com/trending?l=Vue"
    },
    "Vyper": {
        "colour": "#2980b9",
        "url": "https://github.com/trending?l=Vyper"
    },
    "wdl": {
        "colour": "#42f1f4",
        "url": "https://github.com/trending?l=wdl"
    },
    "Web Ontology Language": {
        "colour": "#5b70bd",
        "url": "https://github.com/trending?l=Web-Ontology-Language"
    },
    "WebAssembly": {
        "colour": "#04133b",
        "url": "https://github.com/trending?l=WebAssembly"
    },
    "WebIDL": {
        "colour": null,
        "url": "https://github.com/trending?l=WebIDL"
    },
    "Whiley": {
        "colour": "#d5c397",
        "url": "https://github.com/trending?l=Whiley"
    },
    "Wikitext": {
        "colour": "#fc5757",
        "url": "https://github.com/trending?l=Wikitext"
    },
    "Windows Registry Entries": {
        "colour": "#52d5ff",
        "url": "https://github.com/trending?l=Windows-Registry-Entries"
    },
    "wisp": {
        "colour": "#7582D1",
        "url": "https://github.com/trending?l=wisp"
    },
    "Witcher Script": {
        "colour": "#ff0000",
        "url": "https://github.com/trending?l=Witcher-Script"
    },
    "Wollok": {
        "colour": "#a23738",
        "url": "https://github.com/trending?l=Wollok"
    },
    "World of Warcraft Addon Data": {
        "colour": "#f7e43f",
        "url": "https://github.com/trending?l=World-of-Warcraft-Addon-Data"
    },
    "Wren": {
        "colour": "#383838",
        "url": "https://github.com/trending?l=Wren"
    },
    "X10": {
        "colour": "#4B6BEF",
        "url": "https://github.com/trending?l=X10"
    },
    "xBase": {
        "colour": "#403a40",
        "url": "https://github.com/trending?l=xBase"
    },
    "XC": {
        "colour": "#99DA07",
        "url": "https://github.com/trending?l=XC"
    },
    "XML": {
        "colour": "#0060ac",
        "url": "https://github.com/trending?l=XML"
    },
    "XML Property List": {
        "colour": "#0060ac",
        "url": "https://github.com/trending?l=XML-Property-List"
    },
    "Xojo": {
        "colour": "#81bd41",
        "url": "https://github.com/trending?l=Xojo"
    },
    "Xonsh": {
        "colour": "#285EEF",
        "url": "https://github.com/trending?l=Xonsh"
    },
    "XProc": {
        "colour": null,
        "url": "https://github.com/trending?l=XProc"
    },
    "XQuery": {
        "colour": "#5232e7",
        "url": "https://github.com/trending?l=XQuery"
    },
    "XS": {
        "colour": null,
        "url": "https://github.com/trending?l=XS"
    },
    "XSLT": {
        "colour": "#EB8CEB",
        "url": "https://github.com/trending?l=XSLT"
    },
    "Xtend": {
        "colour": "#24255d",
        "url": "https://github.com/trending?l=Xtend"
    },
    "Yacc": {
        "colour": "#4B6C4B",
        "url": "https://github.com/trending?l=Yacc"
    },
    "YAML": {
        "colour": "#cb171e",
        "url": "https://github.com/trending?l=YAML"
    },
    "YARA": {
        "colour": "#220000",
        "url": "https://github.com/trending?l=YARA"
    },
    "YASnippet": {
        "colour": "#32AB90",
        "url": "https://github.com/trending?l=YASnippet"
    },
    "Yul": {
        "colour": "#794932",
        "url": "https://github.com/trending?l=Yul"
    },
    "ZAP": {
        "colour": "#0d665e",
        "url": "https://github.com/trending?l=ZAP"
    },
    "Zeek": {
        "colour": null,
        "url": "https://github.com/trending?l=Zeek"
    },
    "ZenScript": {
        "colour": "#00BCD1",
        "url": "https://github.com/trending?l=ZenScript"
    },
    "Zephir": {
        "colour": "#118f9e",
        "url": "https://github.com/trending?l=Zephir"
    },
    "Zig": {
        "colour": "#ec915c",
        "url": "https://github.com/trending?l=Zig"
    },
    "ZIL": {
        "colour": "#dc75e5",
        "url": "https://github.com/trending?l=ZIL"
    },
    "Zimpl": {
        "colour": "#d67711",
        "url": "https://github.com/trending?l=Zimpl"
    }
}
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n=Array.from({length:12},(r,s)=>s+1);document.querySelector("#app").innerHTML=`
  <div class="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-red-600 to-green-600 text-white py-8 sm:py-16 shadow-lg">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 class="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">🎄 Advent of Code 2025</h1>
        <p class="text-red-50 text-base sm:text-lg">Festive Programming Puzzles by Eric Wastl</p>
        <p class="text-red-50 text-base sm:text-lg mt-3 sm:mt-4">Stars Earned: ⭐⭐</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <!-- Table of Days -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm sm:text-base">
            <thead>
              <tr class="bg-red-600 text-white border-b-2 border-red-700">
                <th class="px-3 sm:px-10 py-4 sm:py-8 text-left font-semibold text-sm sm:text-lg">Day</th>
                <th class="px-3 sm:px-10 py-4 sm:py-8 text-left font-semibold text-sm sm:text-lg">Challenge</th>
                <th class="px-3 sm:px-10 py-4 sm:py-8 text-center font-semibold text-sm sm:text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              ${n.map((r,s)=>{const o=r===1;return`
                  <tr class="${s%2===0?"bg-gray-50":"bg-white"} hover:bg-red-50 transition-colors border-b border-gray-200">
                    <td class="px-3 sm:px-10 py-4 sm:py-8 font-bold text-lg sm:text-2xl text-red-600">Day ${r}</td>
                    <td class="px-3 sm:px-10 py-4 sm:py-8">
                      ${o?`<a href="/src/views/day${r}/index.html" class="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors text-sm sm:text-base">View Solution</a>`:'<span class="text-gray-500 text-sm sm:text-base">Puzzle locked</span>'}
                    </td>
                    <td class="px-3 sm:px-10 py-4 sm:py-8 text-center">
                      ${o?'<span class="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-green-100 text-green-800 font-semibold text-xs sm:text-sm"><span class="mr-1 sm:mr-2">✓</span>Completed</span>':'<span class="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-xs sm:text-sm">Coming Soon</span>'}
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="mt-8 sm:mt-16 text-center text-gray-600 space-y-4">
        <p class="text-xs sm:text-sm">Participate in Advent of Code at <a href="https://adventofcode.com" target="_blank" class="text-blue-600 hover:underline">adventofcode.com</a></p>
        <div class="flex items-center justify-center gap-4 pt-4 border-t border-gray-300">
          <p class="text-xs sm:text-sm">Built by <span class="font-semibold text-gray-700">devosdevelops</span></p>
          <a href="https://github.com/devosdevelops" target="_blank" class="text-gray-600 hover:text-gray-800 transition-colors" title="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.001 12.001 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/devos-develops" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors" title="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.945v5.442h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.734 1.39 3.734 4.375v5.606zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.706 1.963-1.706 1.192 0 1.915.75 1.929 1.706 0 .948-.737 1.706-1.977 1.706zm1.582 11.597H3.635V9.236h3.284v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
`;

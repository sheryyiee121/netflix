import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const movies = [
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXMlNt8lRlEH5nkoYUHkzaYFsKJJvQq-3wQ4-DyYWQmKlxu9qrynyD5cNZEHPowiQL9IPEPbTSBM9B-id8nR8QPVfL1P_CQjPOqe5ZsDbekwH5AVJbhS3v4gSBXhZb4qdcE6.webp?r=e8a" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTJf3e14TtZ2Z3216UaphDq5nf1SaFyC-0R59wDCSyGdNROqYPTHg8g8SU0kbcn61BMumEkghBN8r11S6_bhQvNJ4oQD4oECM-M.webp?r=e5d" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd-hr2-TdXUEamf_D6vpIxJwKZnueEgjHxa05fdGIYTOXwYvXtkrUhfvtySeRKLFhR7MDZG5cNAtmb52qROa-ZKOftFckYIuFKo.webp?r=4a4" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRyZw5hVzYNlj5cnTUlbq5EqtdSdsAsspntVAHNzTW-VaxaTK4A5d_0pDxPjmoxcs7O51dpWAhCpvB-1r6tBUotO4OHGYteFQzA.webp?r=32c" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXkEYAJ3HkNVF6fUEMKnPf7aEl2G-N-4PUH0ckDltpVVIRn2bjj86nJexAQRGPyru-B1o0mw-X_YtBmMysSbbg7q0wSZqjQgJS7D4EYBaY7lhc3Kf4Rz6ST2zQVdIybAGWuL.webp?r=d59" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABemK-aHwX63DztqbWwQ0xnYGvHYuoYkQ3l3ZIwftPjmuJxC461m-FOI7ZN_bzolsgGd_3_dbacKgr5mV292UjjEYJGCgIubIQOs.webp?r=273" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcaxAOO875GJCdVuF0m1TZ3t7bpSuHTJByPn3R_IUKqnTVM3S9XmcC4-g-Ep1TblyvtA-xEjnx4TKXkxqIX8uBSLvyp-xQUUyfntLLUhwqlyTdsAomLuue-Df9gov2xymJYy.webp?r=62a" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbBnnR11QoTnGit9u-522L0KOXkC0sGLg5WFK5H_2w0c6B8jQnTopyjBexPg8UP_npVxhaZg9wXGvO9-Uwly_937032ITZ4FyMJc5b23NYlA_YqMu7jPKn7ybk0Kfzxg9toM.webp?r=d79" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaz9GSNMsMVZSPLChs7KGs4d0-W6yDUA3sw3EYGXW3wnr-174hHmC6wzKD7_UWlm358xyJrz_1m-lrWKZnhSuX6-0rM9zhyWfKOXCewQXWEWqf1Vbox--iFLpnX9wVtykdEO.webp?r=505" },
  { image: "https://occ-0-7678-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS1-2PXWzkjwgPditAojbfpVT3xfybwleWd5ZxLItIBvbRc9DqjcOB17otGJEWjNmdkdyyEOfqgU-W0fRrPxopHZWrwzQzWwD96ljYztKpxkPLf511UgkGlXitG6pSQOeoKX.webp?r=559" },
];

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMovies = 5;

  const next = () => {
    if (startIndex + visibleMovies < movies.length) {
      setStartIndex(startIndex + visibleMovies);
    }
  };

  const prev = () => {
    if (startIndex - visibleMovies >= 0) {
      setStartIndex(startIndex - visibleMovies);
    }
  };

  return (
    <div className="bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 ml-16">Trending Now</h1>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-black bg-opacity-60 p-2 rounded-full hover:bg-opacity-80"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Movies */}
        <div className="flex gap-4 mx-12">
          {movies
            .slice(startIndex, startIndex + visibleMovies)
            .map((movie, index) => (
              <div
                key={index}
                className="relative w-64 flex flex-col items-center group"
              >
                {/* Movie Image */}
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />

                {/* Large Number at Bottom Left */}
                <span
                  className="absolute bottom-2 left-2 text-[7rem] font-bold text-black transition-transform duration-300 group-hover:scale-110"
                  style={{
                    WebkitTextStroke: "2px white",
                  }}
                >
                  {startIndex + index + 1}
                </span>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-black bg-opacity-60 p-2 rounded-full hover:bg-opacity-80"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Trending;

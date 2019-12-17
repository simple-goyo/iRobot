var landscape = function (option) {
  var _this = this;
  var setTimer = null;
  _this.option = {
    'pic': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAgAElEQVR4Xu2dB7QtRZmF9zYHDDAoomCYQRERR1QEEcUwqDgoIGDCSFCXgwpmUQZQcMwPxaUjYhqBUZQgMIIKI8FRUIxkFMaAiIoZdZlmz/qfffG+y7n3dHU4XdVn11pn3Rf+rvrrq3rf69NdXU24mIAJmEAhBFhInk7TBEzABGBheRKYgAkUQ8DCKmaonKgJmICF5TlgAiZQDAELq5ihcqImYAIWlueACZhAMQQsrGKGyomagAlYWJ4DJmACxRCwsIoZKidqAiZgYXkOJBGQdBMA6wG406Kf8WsB+B2A31efxb+OP7vB70nGn7uYQG0CFlZtVOMPlLQ2gC2WEdKCpNbtmESI7JJFn0vj1yTjz1xMYA0CFtYcTwhJdwTwcADbVj/vlxmOEwB8C8A3AJxH8keZ5ed0ZkzAwpox8CGbk3TnSk4LgtpkyHwatH0FgK8COAfAp0le2aAOH1IwAQur4MGblrqkuy06ewpJbTTtmML+/psATgFwFoCzSf6hsPydbiIBCysRWO7hkh4J4IkAtgOwae75dphffF38HIATScZXSZcRErCwRjCoku4P4AmVqB40gi617UJcuA9phby+3LYyH58PAQsrn7FIykTSXQDsBGDH6mwq6fg5Cj4DwHEAjib56znq9yi7amEVNqyStgKwB4CnArhNYekPme53Q1qVuLxkYsiRaNG2hdUC3iwPlfSoSlS7z7LdEbb1p0XiOn2E/Rt1lyyszIdX0g6VqHbOPNUS0zsewOEkzywx+XnM2cLKdNQlPQvAswHEmZVLvwSOrMQVi1RdMiZgYWU2OJJiScIrATw0s9TGnk4813g4gHeR/OHYO1tq/yysTEZOUjxA/DoA/5JJSvOaRlycP5jkh2cBQNLmJL8+i7bG0IaFlcEoSnpmJat7ZZCOU/grgRBWiCsE1kuRtBuAR5N8QS8NjLBSC2vAQZX0MAAvAbDLgGm46eUJ9Ha2Jek1APYHcDHJLT0I9QhYWPU4dRpV7Sn1JgAv67RiV9YXgTjbejXJH7dtQNI9ABwA4LlVXX8iebO29c7L8RbWjEdaUvxvGrJ6xIybdnPtCMQdxFeQ/GzTaiQ9FsBrAcSZ9fWFpP8d1oRqUDVBdREm6YWVrMayQv0vAK4BEA8ex122OFNY+Nx8ye8X/10XOIeqI6T1ttTGJb2o+goYN1eWlo1IxtY5LlMIWFgzmCKS7lCJKh6pKaWEgM6rhLQgpfi58PkRyZ826Yyk2CjwHwHEz4Vfx46mpZSPVmdbU78iSrotgEMAhLCWK7uR/GQpnR8yTwurZ/qSYpuXt1b/QHturVX18ZUndjYISX2Z5EwXUUraEMDWiz657zoRfPYi+ZXlqEuKPrwewPZTRuaNJOOroovPsIabA5K2ARCrqDceLouJLV9d7dx5PoD4fLWLC8pd9lHSBgCCX2w8GNf77t1l/R3VFRz3JHna0vokPT2WRdTcNPFUko/vKKdRV+MzrJ6GV9LeAI7oqfom1f622p3zFJJHNalgyGOqXSpCXCGwxw2Zy5K2Y5fTONO6nqmkAwEclJDjNSTXT4if21ALq4ehl/QOAPv1UHWTKmML4dWfsTxyUm1Y+CQA8cllV9UY709V16vi7Cqp+E5hPVwWVj1OtaMknZrBGcD3AXwIwLEkL66dfIGBkmIDwxBXPCw+dImv102vvd2W5G+G7kDu7VtYHY6QpFgZHS9+GKpcVInqQyR/PlQSQ7RbfWWMZSPxmFOJ5VEkP19i4rPM2cLqiLakuJYx1IrlEFXsNBCi+mNHXSqymmqjw3iAPM66SiovIxmXElxWIGBhdTA9JH0PwF07qCq1il8CeCeAd3i/8jXRVdv0xKNP8aLYEspRJEs9O5wZXwurJWpJ5wIY4uHV9wE4jGS8IcZlGQLVCvMQ15Bf1euMz0Uk71sncJ5jLKwWoy/pxOqtNS1qST70pEpUvt5RE131xuuQ1ktrHjJImO8UTsduYU1nNDFC0rEAYj+jWZW4g/SvJA+bVYNja6d6+PjtGS2FWAOxhTV9xllY0xndIGIAWcXZ1GtIxmMzLi0IVO9zDGk9pUU1fR266diXobQFZ2ElEpR0aPXUfeKRjcPjOcSQVeyM4NIRAUmxJ1U855dTeTbJ/8gpodxysbASRqR6k81HEg5pE3plJar46unSAwFJsdPrewHEbho5lHeS3DeHRHLNwcKqOTKSHgwgVrGvU/OQNmFfjHcRkrysTSU+djoBSVsA+HcAD5ge3XvEOSRLWYbRO4xJDVhYNbBXexqFrGL7k77LySTjVV8uMyIg6dYAjgEwNPfrSI5lc8deRs/CqoFV0geqty/XiG4V8hGSz2lVgw9uTEDSW2JjvsYVdHCg7xSuDNHCmjLJJMU1hVUdzMVpVTyP5PunBfnv+yEgKfajiuuFcbY1ZLkDyWuHTCDnti2sFUZHUlzXOBNA36fpjyH5uZwnyphzkxSLSpP3ae+JyfaTNgTsqa3iqrWwVhbWp2tsb9t20L2fd1uCDY+XdCMAcVab0177B5CMPeBdJhCwsJaZFpLiWkZc0+iz7OeV633iXb5uSZsAiGuTDxkmg2VbPZHkzpnllE06FtaEoZB0HwDfBHCTHkdqFcmsn23rse+DVl1t+hcvR739oIlMbvx7JO+eYV5ZpGRhTRZWvFQgXnrZVzmO5K59Ve56VzyzmsWZc6sh8J3C5fFZWEvYVBfa4wUS8blxq5k3+eB4LdQOJH/SQ92uchkCkmLB75vjhRG5Q7KwLKzkOSop9iZaENctkyuYfEC8eDNkFXt/u8yIgKS4ThWyWuMV8TNqvkkzDyT5tSYHjv0Yn2FNGWFJ8U7B+F855HW7lhNiF5LHt6zDhycQkPTsasnCugmHDR36fJI5vSJuaB7Xt29h1RwKSfdYJK4mD8v6jmBN1l2FDbCzRlepH0Hy+V1VNqZ6LKzE0azeSLxndcZ1l5qHf5jkc2vGOqwlAUmx0PeB1SdeuxW/vmfLamd5+NdIRs4uSwhYWA2nhKT1qgWH8XXx71eoJl79tR3J7zRsyod1QKC66L75EpGtNG4dtNq4CpGMRa0uFla3c0DS2gDijCs+955Q+94kj+y2VdfWBYFqr/d4c/TCWVic1WSxBsp3CiePsM+wupj5ACSttUhcm1XV+tVNHfGdVTWS4qwrVsHff5HINpxV+4va2ZDkVQO0m3WTFlbHwyPp5tVXxTjjeoGXMHQMeIDqqicfQmJxNhZnYXFGdueeU9mJ5Kd6bqO46i2snoZMissQVE/Vu9oBCUi6RXUWFhKLz8K1sTt1mNYhJGPfeZdFBCwsTwcT6ICApHgucUFg8TMWHsfZWJMlMJHRaSS37yC1UVVhYY1qON2ZnAhIijOuxRJbOBur816Aa0k2lV1OGDrNxcLqFKcrM4GVCUiKu5BLJRbXxm6wc4TvFN6QpYXlf2EmMDABSbEcZqnE4vdrk/zjwOll1byFldVwOBkTWL1E5maVwG5F8ktm8jcCFpZngwmYQDEELKxihsqJmoAJWFieAyZgAsUQsLCKGSonagImYGF5DpiACRRDwMIqZqicqAmYgIXlOWACJlAMAQurmKFyoiZgAhaW54AJmEAxBCysYobKiZqACVhYngMmYALFELCwihkqJ2oCJmBheQ6YgAkUQ8DCKmaonKgJmICF5TlgAiZQDAELq5ihcqImYAIWlueACZhAMQQsrGKGyomagAlYWJ4DJmACxRCwsIoZKidqAiZgYXkOmIAJFEPAwipmqJyoCZiAheU5YAImUAwBC6uYoXKiJmACRQlL0q0AbAfgaQA2ijfjLvp4NE1gngn8HsAvFn1OBnA8ye+MCUoRwpK0fSWpHQHcdkwD4L6YQM8ETq3EdWTP7cyk+qyFJWlrAPtUspoJEDdiAiMlcDaAd5P8RMn9y1ZYklYB2LdkuM7dBDIkcCKAl5O8IsPcpqaUnbAkrQfgNAD3n5q9A0zABJoQ+CWAPUie0OTgIY/JSliStgRw7pBA3LYJzBGBg0keVFJ/sxGWpPUBXF0SPOdqAiMgsAXJ80vpRxbCknRrAGcAiDMsFxMwgdkRiJOEzUn+ZHZNNm8pF2HFnYtdm3fDR5qACbQgcBzJIv79DS4sSbsBOLYF7D4PPRjAmX024LrnnsCBAB6RAYUnl7DkIQdhnQXg4RkM2KQUirsomSlHp7UMAUmfz0RYZ5PcNveBGlRYkvYC8P6MIVlYGQ/OGFLLSFiBc2+SWa+IH1pYcaH9URlPPAsr48EZQ2qZCeu/ST46Z66DCUvSfQBclDMcABZW5gNUenqZCStwbkry4ly5DimsWLAWFxxzLhZWzqMzgtwyFNZBJONmU5ZlSGGdA2CbLKn8LSkLK/MBKj29DIX1BZIPy5XrkMK6AMB9cwVT5WVhZT5ApaeXobAuJLlZrlyHFNYPAGyQKxgLK/ORGUl6GQrrKpIb5op3SGH9BsBauYKxsDIfmZGkl6GwriN5m1zxDiks5QplUV7+SljAIJWcYobCAsnBvDBtLAdLTJKFNW10/PejJ2BhpQ2xhbUyL59hpc0nRycSsLDSgFlYFlbajHF0pwQsrDScFpaFlTZjHN0pAQsrDaeFZWGlzRhHd0rAwkrDaWFZWGkzxtGdErCw0nBaWBZW2oxxdKcELKw0nBaWhZU2YxzdKQELKw2nhWVhpc0YR3dKwMJKw2lhWVhpM8bRnRKwsNJwWlgWVtqMcXSnBCysNJwWloWVNmMc3SkBCysNp4VlYaXNGEd3SsDCSsNpYVlYaTPG0Z0SsLDScFpYFlbajHF0pwQsrDScFpaFlTZjHN0pAQsrDaeFZWGlzRhHd0rAwkrDaWFZWGkzxtGdErCw0nBaWBZW2oxxdKcELKw0nBaWhZU2YxzdKQELKw2nhWVhpc0YR3dKwMJKw2lhWVhpM8bRnRKwsNJwWlgWVtqMcXSnBCysNJwWloWVNmMc3SkBCysNp4VlYaXNGEd3SsDCSsNpYVlYaTPG0Z0SsLDScFpYFlbajHF0pwQ6ENbRAI4EcBGA3QC8AcA6bZL0q+on0POr6ttMKR87FgIthfU4kp9ZykLShQA2bcrIwrKwms4dHzdyAi2EdTrJ7SbhkfR4AP/VFJ2FZWE1nTs+buQEWgjrCJLPX0ZY6wO4uik6C6tbYV0H4CQAl1Sfi0leImkTAPcBED/j80QAazUdtOq4g0ke1LIOH24CyxJoIawV52abSy4WVnfCOhvAq0ieO+3fgKStALwZwMOnxa7w9xZWC3g+dDoBC2s6o8URJd0lbCQPSXGGdGAaluujG7XZsC0fNocELKy0QS9CWF2cojY8Rbaw0uaToxMJWFhpwEoQ1o4k45pVqyIprml9KrESCysRmMPTCFhYabxyF9YHSe6Z1qXloyV9AMAeCfVZWAmwHJpOwMJKY5azsK4FsA3Jy9K6tKKwNgbwBQDr1qzTwqoJymHNCFhYadxyFtbHST41rTvToyV9DMBTpkeujrCwaoJyWDMCFlYat5yFdQjJA9K6Mz1aUjxr9brpkRZWTUYOa0HAwkqDl7Owdid5TFp3pkdLejqAeGC0TvEZVh1KjmlMwMJKQ5ezsO5H8oK07kyPlrQZgG9Nj/QZVk1GDmtBwMJKg5etsLpYe7UcioQ1WQeRPDgNqaNNoD4BC6s+q4jMVljxXGA8I5jWnenR1TOHF0+PXB1hYdUE5bBmBCysNG45C2tXkseldWd6tKRdAHxyeqSFVZORw1oQsLDS4OUsrANIHpLWnenRkuIOYdwprFN8hlWHkmMaE7Cw0tDlLKxjSO6e1p3p0ZLiDmHcKaxTLKw6lBzTmICFlYYuZ2HFvlfb1dlKpm6Xqy1nPpewT5aFVReu4xoRsLDSsOUsrOjJ2SS3TevS8tGSzkrcH8vC6gq+65lIwMJKmxi5Cyt608nizYb7YllYafPJ0YkELKw0YCUIC12syUpYe7WYYCeyTBsSR88TAQsrbbSLEFbVpUb7YjXcB2uBos+w0uaToxMJWFhpwEoSVvTsgwDeUmfLGUmxlcwrE/e/WkrPwkqbT45OJGBhpQErTVjRu9gn6wwA367emnNBPHNYPSMYzwnGG3PuCeDRCfteLUfNwkqbT45OJGBhpQErUVhpPWwXbWG14+ejpxBoIazDSb54UvWS1gNwTVP4XVwzbtr2tOMsrJUJWVjTZpD/vhWBFsL6LMnHLiOsJwFo/FibhTWBasO7dq0mR4ODLawG0HxIfQIthBWNPIPkDfZ2k3QVgLvUz2LNSAvLwmo6d3zcyAm0FFbQeQ+Ab1avpt8UwD4ANmiDzcKysNrMHx87YgIdCKtzOhaWhdX5pHKF4yBgYaWNoy+6r8zLK93T5pOjEwlYWGnALCwLK23GOLpTAhZWGk4Ly8JKmzGO7pSAhZWG08JamZeXNaTNJ0cnErCw0oBZWBZW2oxxdKcELKw0nBaWhZU2YxzdKQELKw2nhWVhpc0YR3dKwMJKw2lhWVhpM8bRnRKwsNJwWli+S5g2YxzdKQELKw2nhWVhpc0YR3dKwMJKw2lhWVhpM8bRnRKwsNJwWli+hpU2YxzdKQELKw2nhWVhpc0YR3dKwMJKw2lhWVhpM8bRnRKwsNJwWlgWVtqMcXSnBCysNJwWloWVNmMc3SkBCysNp4VlYaXNGEd3SsDCSsNpYVlYaTPG0Z0SsLDScFpYFlbajHF0pwQsrDScFtbKvLxFctp8cnQiAQsrDZiFZWGlzRhHd0rAwkrDaWFZWGkzxtGdErCw0nAOKaw/AbhJWrozj/YWyTNHPl8NZiisP5O8aa6jMKSwfgLgDrmCqfKysDIfoNLTy1BYPyV5x1y5DimsywDcK1cwFlbmIzOS9DIU1uUkN84V75DCOhfAlrmCsbAyH5mRpJehsM4juVWueIcU1jsA7JcrGAsr85EZSXoZCmsVyZfmindIYcXZVZxl5Vx8DSvn0RlBbhkKayuS5+WKdjBhBRBJAebBucIBYGFlPDhjSC0zYX2ZZNaXaYYW1kEADsx44llYGQ/OGFLLTFjZP9kxtLD+DkCcZf1DppPPwsp0YMaSVkbCuiJugpH8Wc5sBxVW9bVwXwCrMoVkYWU6MGNJKyNh7UfysNy55iCsWO0eZ1kPyBDWmRnm5JTGR+ARA3fpa9XZ1Z8HzmNq84MLqzrLegyAz0zN1gEmYAJ9ENiZ5Il9VNx1nVkIq5LWXgDe33UHXZ8JmMCKBN5G8hWlMMpGWJW09gdwaCnwnKcJFE7gsyQfW1IfshJWJa1tAJxTEkTnagIFEng+ySNKyzs7YVXSuiuA9wD459KAOl8TyJzA5QBeSPKMzPOcmF6WwlrIVNI+AOKT7dPjJQ66c55LAtcBeHd8SP6wVAJZC6s627odgBcBeE7GC0xLHX/nPX4CIaqjABxO8uLSu5u9sBYDlrQDgB0B7ARg3dLhO38T6JFArCH8RHxI/rTHdmZadVHCWiKv2wBYe9FnpuDcmAlkRuD3AH6x8CGZ/SLQJvyKFVaTzvoYEzCBsglYWGWPn7M3gbkiYGHN1XC7syZQNgELq+zxc/YmMFcELKy5Gm531gTKJmBhlT1+zt4E5oqAhTVXw+3OmkDZBCysssfP2ZvAXBGwsOZquN1ZEyibgIVV9vg5exOYKwIW1lwNtztrAmUTsLDKHj9nbwJzRcDCmqvhdmdNoGwCFlbZ4+fsTWCuCFhYczXc7qwJlE3Awip7/Jy9CcwVAQtrrobbnTWBsglYWGWPn7M3gbkiYGHN1XC7syZQNgELq+zxc/YmMFcELKy5Gm531gTKJmBhlT1+zt4E5oqAhbVkuCVtTPKyuZoF7qwJFELAwrqhsNYBcBKASwGEuOLnpSS/XciYOk0TGC0BC2vC0ErSkj+ON+euFtcikV1A8vujnRnumAlkSMDCmiyseIvuLaaM1zWLz8AqkZ1P8toMx9kpmcAoCFhYk4V1DoBtGozw1Usk9g0AIbHfNajLh5iACSwhYGFNFtYqAPt2NFuuWiSxCyuBnd9R3a7GBOaKgIU1WVhPB3B0jzMhrn0tXNQPecVZ2MU9tueqZ0RA0kMAHA7gCJJHzKjZuWnGwposrHtVZ0WznAjfrST2zRBYJbH4M5eCCEg6FsBuVcpftbi6HTwLaxmeE+4Udku+Xm1XArhoQWCVxH5S71BHzZqApBcDeOeEdi2ujgbDwspbWJOy+w6A+Aew+iyskth1Hc0HV9OQgKR7A/gcgA1WqMLiash34TALa3lhXQIgJmEJ5YLFAqsk9n8lJD6WHCV9FMAzavbH4qoJammYhbW8sFImYEP8vRwWq/RfRTIu6rvMgICkfaoL7amtWVyJxCys5YW13PWIRMQzDX8byVfMtMU5b0zSYwCcCuBGLVBYXDXhWVjLC+uhAL5Qk+PQYb+szqp8G32GIyHpbpWsNumoWYtrCkgLa3lh3QrAbzuaiH1W82UA+5H8Yp+NuO4bEpB0IoAde2BjcS0D1cJaYbZlsrRhpX8PRwHYg+SfevhH4ypXnhtvBvDKHiFdDmATkr55sgiyhbXypIxdGtbtcVK2qfq1JN/YpgIf24yApIMAHNjs6NpHbUfy9NrRcxJoYa0srLiY+rjM5kI81rM3yc9mltdcpDMjWb2F5KvmAmhiJy2slYX1BgCvS2TaZ3j8j/tkkr/osxHXPZlAi+ULKUhjh4+tScYWRy5LCFhYKwtrJwAnZDJr3kTyNZnkMndpSNoBwMkz6PgTSJ4yg3aKbMLCWllYcdt66AeQ/wjgaSSPL3KGjSBpSXFZIC4P9F1WkXxp342UXL+FNWX0MrhTeCjJnL6Wljzfk3OX9BQAH0s+MP2AswFs780eVwZnYeUvrMjwfSRfkP5vwEe0ISDp5QDe2qaOmsfGDhwhq6/VjJ/bMAtrurC+AuBBGcyQ4wDsSfJXGeQy+hQkHQbgJTPq6O4kj5lRW0U3Y2FNF9Z7AeRydhNfG57n9yb2928u3ksJ4N8A7NxfK2vU/HqSfa/pmlFX+m/GwpourL1j18j+h6J2C/8LIBaN/mftIxxYi4Ck3StZbVjrgPZBx5KMa2QuNQlYWNOFFV8H42thbiV2tgxxlfC8Y27s1shHUrzSLc6qunrxSJ3+fqu6bhVvWnKpScDCmi6sGwP4c02esw47r5LWGbNueCztVeurYlV5k9e6NcVwBYBdSMb+/S4JBCysGrAyWNowLct4pjCWP/j9h9NIVX8vaUsAsRC3j90WVsrih/G4F8l45ZtLIgELqwYwSXHd6O41QocMiS1J3ugFpisPgaSbAdi/klX8epblZwC2IBnzyaUBAQurBjRJnwCwa43QHELiBkGI63s5JJNTDpLibCrOquLsatYlzn7vTjJ2AHFpSMDCqgFOUvyPfGiN0FxCrgHwwfiQjOslc1uqM6rnVi+ImOV1qsXMY0+rtfxAc/tpaGHVYChpewCfrhGaW8ivAXyoElfclZqbImkdACGq+Gw6YMevILnRgO2PqmkLq8ZwSroTgB/VCJ0UEteWHtjw2K4O+wuAowEcT/JTXVWaYz2S7hNb8FSiuuvAOZ5A8kkD5zCq5i2smsPZ8E7hx6sLvLE4MJfdQeNN0rHzQ8gr9l4qvki6C4DY/mXhk0OfDiYZO5O6dEjAwqoJU9Jv4jpEzfAIW2OXBUmxKHFVwvGzCI0tU1Z/SMYbpYsqkuLFpQuSunVGye9LctIr6zNKscxULKya4ybpTADb1giPr477k/zw0lhJz4udF2rUMURI9vKS9IjqDl/c5XswgDizyq08h+RHcktqLPlYWDVHUlKcHU17dOOcauV5/JxYqrOCeKt0zuX8eN09gFhJfybJQTYxrAQV/0k8pBLV7TOGFqvWY1fYWeydlTGGflOzsGrylfQsACv9zxl34w4k+YNpVVZvC459lu43LTaTvw9hfR1ALJGIz5Xxs+2SiWrJQdzQWB9A/Fz4dUgqXmR700z6Py2NWELyaq+xmoap/d9bWDUZStoMwHJLA15HMmmdlqT1qs3hnlkzhVzDrgOw8InrfIt/v/jXsap8QUoLYoqlByWX6G+I6j0ld6Kk3C2shNGacKcwzjbirCqWDDQqM9zVslF+PmhZAnFNM2QVX5tdZkTAwkoAvURY8V7AuHXd+hXx1VfENwHYPCEdhw5H4O2VrHLdxWM4Mj23bGElAJYUa5hiYWI8rxey6mwvI0mxZOLV1bNuN0pIy6GzIxDr1mLcT5xdk25pMQELK2E+SDoKwIUk42yolyJp60pcT+ilAVfalMA7ALyB5C+bVuDj2hOwsBIYSnrqrG5bS4p95GNngaEfL0kgNMrQ/wFwCMnTRtm7wjplYWU8YNUjJy8G8CIAt8w41TGmFl//P1mdVcWzmC4ZELCwMhiEaSlIivVaIa29psX671sTiEeU3kXy8NY1uYLOCVhYnSPtr8Jq5XeIyzsAdI/5cgDxJqKQ1c+7r941dkHAwuqC4ozrkPR4AHvEiwxm3PQYmzsdQLzE9BiSfxhjB8fUJwur4NGU9MhKXLFrgUsagXicJiTlNw6lcRs02sIaFH83jUvaatEZV+mPu3QDZXItvwIQe5QdQTI2VnQpjICFVdiArZRutS1wbOe88LG8/grsFAAnAziJZOx371IoAQur0IGblvYSef0TgHjYep5KPDJ1UiWpS+ap42Puq4U15tGt+iYp1nDF9a6Fz9B7zPdBPR5EPxvAWQC+RDLu+rmMjICFNbIBrdOdal1XyCv2nIrN8Taoc1xmMZcuEtTZJK/KLD+n0wMBC6sHqKVVKSmkFRfu42euArtgiaB+XBpn59uegIXVnuHoaqgWqMYzjHerPgu/jp+36KnDsVVLSCguii/8jF/HVs1neTFnT9QLq9bCKmzAhk63kllcE4vPraqfdX4fc22SkFb/Gclrh+6b28+fgIWV/xg5QxMwgYqAheWpYAImUAwBC6uYoXKiJmACFpbngAmYQDEELOufmr0AAAAgSURBVKxihsqJmoAJWFieAyZgAsUQsLCKGSonagIm8P/1+xTDF3FaDwAAAABJRU5ErkJggg==',
    'mode': 'landscape',
    'bgcolor': '#32373b',
    'txtColor': '#fff6fc',
    'txt': false,
    'prefix': 'Shine',
    'picZoom': 2,
    'zIndex': 9999,
    'init': false,
    'landback': false
  };

  if (!(_this.option.txt)) {
    if (option.mode == 'portrait' || option.mode == "") {
      _this.option.txt = decodeURIComponent('%E4%B8%BA%E4%BA%86%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%EF%BC%8C%E8%AF%B7%E5%B0%86%E6%89%8B%E6%9C%BA%2F%E5%B9%B3%E6%9D%BF%E7%AB%96%E8%BF%87%E6%9D%A5');
    } else _this.option.txt = decodeURIComponent('%E4%B8%BA%E4%BA%86%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%EF%BC%8C%E8%AF%B7%E4%BD%BF%E7%94%A8%E6%A8%AA%E5%B1%8F%E6%B5%8F%E8%A7%88');
  }

  for (var k in option) if (option[k] != '') _this.option[k] = option[k];

  function createCss() {
    var cssBlock =
      '.' + _this.option.prefix + '_landscape{width:100%; height:100%; background:' + _this.option.bgcolor + ';position: fixed; left:0; right:0; top: 0; bottom:0;z-index:' + _this.option.zIndex + '; display:none; text-align: center;}'
      + '.' + _this.option.prefix + '_landscape_box{position: relative; margin-left: auto; margin-right: auto; top: 50%; transform:translateY(-50%); -webkit-transform:translateY(-50%);}'
      + '.' + _this.option.prefix + '_landscape span{font-size:22px;display:block;color:' + _this.option.txtColor + '; text-align:center;width: 100%;padding-top: 10px; line-height:2;}'
      + '.' + _this.option.prefix + '_landscape img{width:auto !important;-webkit-animation: ' + _this.option.prefix + '_landscapeAni 1.5s ease infinite alternate;animation: ' + _this.option.prefix + '_landscapeAni 1.5s ease infinite alternate;}'
      + '@-webkit-keyframes ' + _this.option.prefix + '_landscapeAni{0% {-webkit-transform:rotate(-90deg);}30% {-webkit-transform:rotate(-90deg);}70%{-webkit-transform:rotate(0deg);}100% {-webkit-transform:rotate(0deg);}}'
      + '@keyframes ' + _this.option.prefix + '_landscapeAni{0% {transform:rotate(-90deg);}30% {transform:rotate(-90deg);}70%{transform:rotate(0deg);}100% {transform:rotate(0deg);}}';
    var style = document.createElement("style");
    style.type = "text/css";
    style.textContent = cssBlock;
    document.getElementsByTagName("HEAD").item(0).appendChild(style);
  }

  function createDom() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf("micromessenger") != -1) {
      _this.option.txt += "（请打开微信横屏，或在浏览器中访问）"
    }
    var landscapeDom = document.createElement("div");
    landscapeDom.className = _this.option.prefix + '_landscape';
    landscapeDom.id = _this.option.prefix + '_landscape';
    landscapeDom.innerHTML = '<div class="' + _this.option.prefix + '_landscape_box"><img src="' + _this.option.pic + '" id="' + _this.option.prefix + '_landscape_pic' + '" style="display:inline-block;" /><span>' + _this.option.txt + '</span></div>';
    document.getElementsByTagName("body")[0].appendChild(landscapeDom);
    var img_url = _this.pic;
    var img = new Image();
    img.src = _this.option.pic;
    img.onload = function () {
      document.getElementById(_this.option.prefix + '_landscape_pic').width = parseInt(img.width / _this.option.picZoom);
      document.getElementById(_this.option.prefix + '_landscape_pic').height = parseInt(img.height / _this.option.picZoom);
    };
  }

  function landscape() {
    if (_this.option.init) {
      _this.option.init();
    }
    clearTimeout(_this.setTimer);
    _this.setTimer = setTimeout(function () {
      if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        document.getElementById(_this.option.prefix + '_landscape').style.display = (_this.option.mode == "portrait" ? "block" : "none");
      } else {
        document.getElementById(_this.option.prefix + '_landscape').style.display = (_this.option.mode == "portrait" ? "none" : "block");
      }
    }, 200);

  }

  createCss();
  createDom();
  window.addEventListener('DOMContentLoaded', function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf("android") != -1 || sUserAgent.indexOf("ipad") != -1 || sUserAgent.indexOf("iphone") != -1) {
      setTimeout(function () {
        landscape();
      }, 150);
    }
  });
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
    if (window.orientation == 180 || window.orientation == 0 || window.orientation == 90 || window.orientation == -90) {
      landscape();
      if (_this.option.landback) {
        _this.option.landback();
      }
    }
  }, false);
};
var landscape = new landscape({mode: "landscape"});/*  |xGv00|6ecfd05fcdb2dc616f5626191927ae25 */
// landscape2 = new landscape({
//   mode: 'landscape',
//   prefix: 'Shine',
// });

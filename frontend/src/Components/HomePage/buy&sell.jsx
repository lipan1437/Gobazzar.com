import react from "react";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
export const BuySell = () => {
  return (
    <>
      <Box width={"80%"} margin={"auto"} >
        <Text textAlign={"center"} fontSize={30} marginBottom={5}>Buy and Sell from 1200+ Cities Across India</Text>
        <SimpleGrid minChildWidth="150px" spacing="40px">
          <Box height="370px" backgroundColor={"white"}>
            <Image
              width={"100%"}
              height={"25%"}
              src="https://www.imagetolink.com/ib/b2EDVorX9O"
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"20%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Mobile & Tablet
            </Text>
             <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Used Mobile</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"} paddingTop={"10px"} >
                <Box >Tablets</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Wearables</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
              </SimpleGrid>            
          </Box> 
          <Box  height="370px" backgroundColor={"white"}>
            <Image
              width={"100%"}
              height={"25%"}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJsBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABSEAABAwIDAgcKCgUKBQUAAAABAAIDBBEFEiEGMRMiQVFhcbEUMjM0QnOBkbKzFSMkJTVydHWh0TZSYoOSRVNjdoKToqPB0gcmVFVkFmVm4fD/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAAICAwABBQEAAAAAAAAAAQIRITEDEkEyEyJRYXEE/9oADAMBAAIRAxEAPwCxDXJ7WOJslsnxj4xvWsmh0bMtQ1vMVemNrvUqYeNhXce9ycKhJBkPQm5mqHahsnwBXdzOLZGwl4cDYi2vYsUaioNVUDumYBtMCBwhs03P5JZZaVjNt4C3kXZlgI6uqDcPHdU3Gac3xh42isDV1DHH4yQ6Dyyo/UV6NeCngrEur6j+ck/jKmoa2qkxGnZw0mV0rAeOd2YJzOUvVsgnAIGaWqY9zdAMxtpu1UzaadwDu6ovTKNFogUAlshWulheYyWvG/MDdScO/maghACcAhuHfzNSiZ/M1MCU4Ibhn8zU4TP5moAkJUNwz+ZqcJn8zUASE4IYTP5mpeGfzNQBKUIYTP5mpRM/9lAEhKEOJX23hMdNML5MqALSoGmM8wcZnsbY8W7rKZwLOMJmu6nXKBRCVUO0OMzYXQMqI42yGSoihs4kWzvDb/j+CoqrbSthixmUU0JOHFjQMxHCZmh3o32U3LV0cxbtKNyxMm1lYzEX0nAREMo21Ga55SRa3o3qCj2zrapuEk08LO72F5sScmn4pe8P1repCV5+7bevFG2p7lhu6uFJludxcW3v6Fe4LilTidRXRzBjRTTiMW8riA/6pzIrjYv3SX0bvCj60o679KSO73ENbmcmRpCSASSzujibxv1v/wBuRrqJzaZ8k3ki4akwpvy390O1AEQ4Uxo+O4zlytJO+XKtJ28tT4vCM+skTovCM61m0TDxpvWrtg75UjfG29avI/KVQqBxwfM2IfZZfZKwRb8qqfsw7XLf439DYh9ll9krAjxur+yjtcsvJ3GnjQhumG+bPYjpm8fd5IQTd2G+bPYj5rZ9/khZroZw/ZKIwpoOL04sfCN5P2whxludERg5b8L09t/DN9oJztF6egyRtFQ/Tyj2oqKRjWd6ENObSyfWPamB66fjKpqosdyBAvaL6BTOdm0THbkEisnWS8q6yDcAnALgE4BAdZKAlATrIBAE6y4BOAQCAJwanNCdZANyp7GC+oSgJ4TFTx5Wi1l0tnC2VMaUqKTL7cxD4JpbD+Uab3gWJxNnyXbLokh901b7bZt8KpfvCm94FisSb8k246Hw+5as8vyaY9H1Mf8AzDU6fyOztKCwiI5NlLfzJ7Fdyx32ln+5m9pQuAwkw7Hab4SP8Kz+L+qh8Z+CItD9ON94VtNlW5a3F/tbfdsWeMHzFC7/AOQNH+Y5azZ6PLieNj9Wsj9iNVjOU5XhpoqSV7M7xlbYm3On4Q29STzsHarSo0iI/ZKrsJ8OPNjtWv1l8G4h4tP9VV2FeOfuB2qwxDxWXqQGFeON8yO1O9idLiTvki6TvlyZPME+LwjPrJE6IfGNPSsmiUeNt61ds8pUx8bb1q6j8pVCoPG/obEPs0vslYEeN1X2Ydrl6BjY+Zq/7LL7BWCI+WVP2Zva5ZeReAZvg8N+oVYTEZjfL3o5v9wQLR8XhnmyrGUOD/7I3E/ms2lBZm3Ni0a/rD/cp8KPzzT8cH45mlx+s3pSOzW3u9Z/NSYZf4Zprl3hY95P6zelOdovTfVJ+Of1ntUN9VLU+Ff9YqE2XT8ZUt0hN01cEEVOCaE7kQZyUJAnBAKAnAJAnhAKAnALgnBAKAlAXBOCBSgJwC4BOATIoCcAlATwEBnts23wuk+8qX3gWMxRvyTbz68PuWLcbYt+bKT7xpfeBYzFm/JNvvrw+5Ys8u1Y9LCRn/M82n8iN7ShtnmfE7FeZd7KPmH/ADRP9xM7XITZzwOxPmHeyoWGc35gh/rG33jlqMCHzvj32yP2I1mnfQEH9Ym+8ctNgTmtxTH3HX5XGf8ABGqhXptKjwZ+q5AYT4wPNDtUlRWmQFsLC8WOpG5BUsTqicxh5YAwXIWk7ZrDEqiJsUsYkBe4WyjWyqqWaYVLW07QXCIBWFRRRQ0srgMxtvJ1QeFN+X/uh2ovYEHDqifjVdQ4O5t65WsnfJE9E80tZOaQ06JHEJoUNEhf8qBV7TOzZlnb/HX6VoaLc5OFQO1MWfZ/EzmcMlLK8ZXWvaN2/oWFkoYuH4rpS17Q2/COuN632036N4tfd3FN7BWHfIBM25ADQsfNdNv+fGW8n4hTtpp6BkdyzIQL79ERLfM7qCfiLYp4aWVkrC6JxsA4aghNk1LuoLLG7X5MeeA7hodPw/8ApLhotjNJ51vJ+03oSObv0/BOw8fPVJ55nJ+0Fc7ZXpvKnwsn1j2ocoiq8K/rKHK6fjJwShInBAKlC7kShAKE8JGhPaEBwCeAkATwEBwCeAuATgEycAngLgE8BAIAngJQE8BAcAngLgE8BAUW17b4dR/eNN7wLF4tYUu3/nIfcsW22v0w6kt/3Gl94Fh8VJNJt8f6SH3LFF7VOlvP+lU/3GztcgNn/F9ivMO9lHT/AKT1H3Gztcgdn/A7Fj+gd7Kzq0Dz8w0/9Ym+8ctHgIPwnjt+WsZf+Bizj/oCH+sTPeuWlwL6Vx77bH7DE52Mum1ma1kNg0CwO5V+Ej5U488Y7VZVPeO6nKuwrw/7sdq2+shtf4pN1Ktwrxz9yO1WWIeKzdSrsL8c/cjtRewuH98uXP75cmTzPfu13bkrRd1uVecN2nr8Jgfhk4LXxPy5gbvbrqwcm+9jzHkWh2JxyWvnmo5WvMlOQ7hXG4IJ709Ky9t8HK1IZ8py9K0FM3KHKjHjzetX8ema+iqKoDaT9HsU+xTewVhW2NZUG2gph67uW62k/R3FfsU3sFYSO/dVR9mHtOWXlaeK6RMAbDhVtPiz2KydclwsToNw6OpVzQXQ4Vb+aPYj3Cz3BwaeKNSBzdKy1pd3ULmm98p/hP8AtT8OHz1R6HwzOT9tvQmPDbDvN37KfhuUY5SWAvwrP1f1m8yqdovTeVXhH/WKHKJqvCP+sUOV0/GRE5NTggHNCcAkCcAmDgE9oSAJ4QRbJwCQJ4CAVoTwEgTggHAJwCQJwQDgE8JoTwEAoCekCcgKLa8fN1H95UvvAsPifie3314fcsW52w+jqP7ypfeBYbEzag2+J5HQ3/uWLPLtU6Ws/wCk1T9xM9pyDwA/F7F+Yd7KLkcJNoZpWG8b8CZldyHjOQWAas2L+zu9lZrQu+goBy/+oR7xy02AfSuPfbI/YjWYd9Cwf1gZ7xy0+AfSmP8A2yP2I1WPYy6bWp8Eepyr8L8OPN/6o+p8D6CgMK8OPNDtWv1kNr/FZupV2GeON80O1WNd4rN1Kvw3xtvmh2p3sLd/fLlz++XJk+SGufNis08rTwrnvleLb3auJ9a3OyOIxNphwT6GigjcM75HXe487tQL9iydKx5FTUMAMj4CwE8mbi39RULeCw58bKd3xpaeEJaNOYC655lyUeyU5MtWx8NQ2ZhNwdCD6lp4L8a+nUvMdiX8IYZ4Tlc1+WSIHiu6QvUY/KWmN2rau2l/RvFvsU3sFYZg+WVI/wDFb2uW62kF9nMWH/hTewVh4SO6qknf3KD+LlHkbYIRYU+FeaPYjXkiQ3cRdo8o831gq9xvDhXmj2KykLsw5so3HoWVWHe7Tvzut35/3p+Gm+N0hzEjhmeUT5Tf2ipGU082sLHvsQLNNzr6U2ma+HGoI5Lh7J2BwJ3WcAU5OUVuqrwj/rFDEi6ZW1TRLJxtQ49qB7viMga+SwO4hdPxkPc9rAXOIAG8p7XtcLghQdxmtiyidvBk685SVsbqENzEZT5SJYVgrO0b3BPD2jlVDUYg6IO+KO62YaqXCauWUAvJIPK4KuBqr1jmvaS06DekinjkBLHXA0UbQJGZd7SfJUtPh0ULCI7jS+pT0npIJG86e2Rtt/4INpu466BTB12jmT0WxLXNNrFLw0bX5C7jcy6JoGQkXVQHmTFqoAaNkyj1BLR7XgkZa905srOf8EJcRxEuOUNFySnxkOsQbg7iEcAXwjdNd6kY4HcqysrGU5YzRzy7RqJhqo3AOvZTwr1o6yVNa9rho4JSUcDWlJth9HUf3lS+8Cx4p21s22dIZ2wd0TwsEhF7EwMtp6lrtsT820Z5sSpfeBYWqwx+L4ltBBHDneKqJrToGNLoY+M47+jRZZ72r4sI6+LDcMqIsT4k1IyWNsjnANcx1tOxNwaWiqqzZ/4Kk4Snpg9r+Uxi1hfmQNHsRiNLjUMolgq6RwyvpXtdbKRqNd3QtNFgdLgG0ENRQNZTh8bmzUgOhFrhzb8x7VlZceajHKxXYVTsfhmSojJ+cJJ478hDzY/irXZ4g4njg5TVx2H7uNUuL4tI1pZCwZ3ANYwDlJ3BX+ASROmqgyMte7JJK/nJIHY38Fy+DzXLycox8ltrX1XgfQUBhPhx5sdqOq9IbE62KAwrw482O1elfyX8HV3is3Uq/DvG2+aHarCt8WmHQq/DvG2+aHanTi3cuXO0K5UT5To3GjjnbPZtm8QHlI3D8FdYdgnwlTtlmtHUENfZ2hLT5XUjsD2cirojLWQB5keXta6+jeRa+bZekZTQGjj4EtaWyBvltI3euy5vW2Ww7FZsZlMbo4Wgimqi1rh5V969HjHfLJbP4X8FRU8D7GS+aX6x3rXM8pa4zgfFbtI7Ls/ip5e4prfwFeftmvVVLjy0je1y221UwGC4ky+ppJfYK86ZMM85J30w7SozbYCC+0eFgm1ojvRWIV8VMA+XcQAOnRRYcIpYIjwRlLI7A5b2/FBvoppsQLpo+FhAs1jrix9Cj12eXS52cxeCSpe4TcGHt5eXeosTr2v2jc9rmuAnZqBzEBA4jHHBHFJFR8Dl3lgNyeuyqxOHVge3hBeYHjN6b705LEY/22M9a6SaQcpee1WtFhUdVCGlxzkcu66yIqPlG/fJb1lbbApM2UA710YzbO8AsJqqmGvML2t4NrtAd5HT6UbtlViClpiLOdI/Ll5wUDWU08+NVT6cx8ADxJc5Dg498LWsRdSYhhElfXRVdTWl3BR5GR5eK08rukqbhVY5TfKvp8QcCIrA5QATa+nVyoOmxiXEMRD6KTgqVps5jxoQWg7uQg6K3OBysY59NVR8K0EtDot55r303rPQQRU3DwxzP+E89nQd9a+vNqCO1ZXHKOvDPxXJuMInqXFrJ4zlvZr9LPHOFePOWnkN7GyykLqzDMFppnQVEsksgGRliWnq5ArqmllqYCZmMjJdcNaSSOtdHjxsx5cflsuXCNgKnjIDLHeujhYb2e8W6k/uZjtOFeDyblbIypquBiuDuCzOHVb5ZZXudq+Qu0PTZX1bhsssZEE7eE5GvGUH0rN7N0hmlldNLl4LMOCBu46777relTlzDx7W9VXzsppIgQWublJPSjMCMrYG8I4lvILoGqw+rqJGuggjbGy5a2SQ3c7kNwNB61asgdBSPkncI2xNueDN9FnJY0tgp8FM6Zs0rGukAsFKI2NjL3MAB0AHImHD5mn4qoYOfM299R1cl/w6jPNBK6nDI8ua+uZ5/LVFhze1ZVzR0bOFkmcBfRvOeZGYZWOqHnOLDm5lTYtgOJyVUVRBJFLDGSXR5jmPSNPwVlgzXNvnaWOt3rt6eMPyWdI9srDDqUD/ALhTH/MCoNnTbHdpb/8AWUo/yo1e7YfR1Jf/AK+m94FmKFz46za2WJ+V8dTA5p5PAMWed/cMem3pgyRxBbIQTa7ORZja+eiiq2ND5ZqmNruCzOIy3Gt/9FFJW1UcpgNXwjuDEj2MFzlVXtFI19RTywGOSaaPR4cSCCNAQByrm83l3+2Ms+OgmFyQvfK97y6eMBjM29t95WiwSu4SqfCxxZwmpDG3e7LYegLCUeJ4rgckb5GxRZnkBjyJMwvy/mtnhVX8IS1tZ3FJmMsZ4OAtJYQ0WN+Yb9+92q4fH47M97c+OPLfNN6O7HzaNddsws4KLCNZQf6Idqc2ZtXQd0QvkaCHAtk1LSOQjnTMG8ILfzQ7V6+O9ukfXeLy/VQGH+NNP9EO1WFb4vL9VV+H+MjzQ7Vrezi2fq5IlcuTJ5hhzGtN2iwB3dCvGyZ2WbzA261SYedbK3qGudc59HAWA5LcqzxXXHxoa7laggBxJVTGHOlBKspg3K7X0KoTD7b1/BQ1rM+hge2w6QQsOyc3nP8ARcvpWj21AHdzDvLb6etZVljC831cLW5Vlk1wbLZVodhhdprYK8hY0cip9nGCHCo2jc4l3oV1DrYKp0mgMVYDTOBtoeYLCVto8UadBdzSNBz9V/xW/wATYXU79OVYishZNUF773ZuslRHVdTwbHyXPFeD/iXoOBuIY4A6gEArzGua59HOCCCSLeteg7K1JmhgOoNhfr5VrizyEUOIwRUzWTTMa8XuC4IhuK0xdYVEZ/thR078zpDv45t60Vmbbyb9IWiDG4pTZgBNFc7hnCyGEYj3VtTV17g1jXGzQ++gAsD16LZiphacskTjpqA4Ktj2awqqxN9XmqWNc8PfA0NDHHl136rLOtMFq6oNc6BlHKxzg7MQHX5OdTS1vcUnA1Bax43jMEfFQh8sb45sgHkGMH1ao2ow6CVhlkkcHAG7gQLqplym4/We+HKZlwZQD0qKTaakjNxKEHVV2QuDXN0JsdNQqiqxBzzlv+AVJXse0PwhPwMMjC2xLhmT8Nl4arPDBokJJdkcSL7r3sL8nIsTWSNLDcNJ5DvstDsQBUUxfM6R7g9zWu4Q3A000O5LXJ74bhsvkgAIPGJy3D5maEPFrFSMijYNM4/tkqnxsNe1rGueOMMwzHUXTojXEuFrXtYW9SUSEDWyqpsQMIijaT3thfnyX/0UUOISuabOta+vPqs22l1wrrHS4FilLhIbloBbyqiixCSSZzLkgW5N91dMaGsIZfU663VRPkip2wNsLpD/AO4UvvAsHjU8lPBtg2IkPfVwC45LQNcexegbVQSVWHU0dO3O5lbTyOF9zQ8En8FjMUwbEJ6jaaOOmLjVWkp9RxrRsj/3LDOz2VhOE2Ikx7WwmKwLcJbcc/fb0HSUhxGGlraZuUvObjOJIHVuHoVzW4ZXSbRMqWU7jCcObCH/ALdzcfiFJs1RT0WGUlJVx8FMyGMOby3tqsL45lTyxlnKqi2eq5sUp6lrI5GAlszS27XNsfTv16wFp3YLSsiYKGSallY0OY6MlrcwJIDm311G/wDIK1w5jBm0v0J+IuDOAJ0cbgj1Kp4MJGM8cl4JBVvNA3h4mNmey72A6NcQL2S4dUR07wZL24O2g6UDLICAR6k6KQhtt4POtZqXhfqvamphlgkDHgkjduQmHC9S22/ghp6UDnvbMBfo0TmyEODmOLSABYfmr2NNE7Q6rlSMrJ2bpT6TdKq9k6rAUNQ5j+NTz/wK84YyRtJa5tuRwQET2uejnEkX3BYTJtYUOdcWA3ouqmldC/gsrXFpy33Xsg2d8AizYtVSpsYXFsKxSsfLw8tLZ7SDla4IKnwCrjbxq1htyZLhbarDRmPQq/MXXtYdayyysXiWkpRHSsYT3osLC10XFFYX3JkLmhuup51KJAiWioqmBroi1xuCqo4BTvLiyMgu8onRXMtnttqoRIRxWufbpcq3/I/wE/ZmglZaaHPz3KSDZykpm5aZk0Yv3rZnAKyL3NHfuPpRMAz73O9a0xziLjfqkbgsMfFbTTOH2h35rjhP6lNU9Qqnfmr5trnVw/tJzRr3zvWq90+jO/BdQ1h7no5QTvzS5r+vcuwLDsQjxKZ1TFI2J2XKc1xyrSOPIHOA5NeRJDIS8NLncXlup91etOxKkLqiifSl7mtzcKA61ua6JxPD6TEKCOnmbfK4OOpBTg0G13Ei9zqldStLb8NMD+y+yqZJsZ2o2KoZtQZW/Vld+aDP/D2mN8tTP/elaYRG5HDz/wB4U3ubW/dNV/fFHuXqzR/4dQEaTEnnMjkdguy9bggdHRTU74nOzZZc1wehaCO7RbhJHfWddSNlubEnTpRMx6gO5sc5qA/2n/khZcMxuQ3LcPI5i9/5LQNII753rTSeN37x/aVe49VA/C8dlN3CgJAt4R/5dJ9aQYRjp0JoQL38I+3YtIY9AeEk/iXBpv38lvrJe56qlpsIxZjsz3ULj9Z/Ju5FfRwudGzujLwjf1CbApWsA0DnekqZrRyk+tEyKy0x0LXCxGnWoHUTgXkPdx9+qJkaALh7h1FQtzX8I/8AiUZ+t7VNxG+lzyh3CyDi2IuoX4Y2YNzzS8XcQRdFk8a90ocWhZcLR09AYzpUSdRU0lKC4ZjmsNLp0bweXVTZiSOhXxpKtqMNae9cWnoQT6Wph3cYdC0ThmbeyjDL8iNaLbPcMWeEa5vWFLHM0+VqriWBrt7Qq+ow+N+rQWnnCOTiIydK5DPoqpneHN1pUbDPwOZnVgX2Z3yqII2Z+9Rhcco1UYroqOVpk0N0a0khVcej9EfGriahqw2xPQqguu51h6Sraq3O6lSuN5H9G5RnFYiI3HkN1KHnnAKDBsLhSA31USqsE8ISLE6KIOzP6ky5TYT8YjfJyDN9rmyKpzoq+pJBbZFwd6OpaSIqW932GilccrbKBm9Pm3DrVJdn0JPUFFBJaQg890kqiZ4RvWovaly2UWbfS6Ic/iIJgBcLqc8oWuKL2jB4xTwVD5RTgiwJr8t01ruMdVG/UKNmhNkAc15BHMnOdcggoTMbgXUo3IAwS2AupMwcLgIYHiBTs71APEgb3xUofzIYgEm66InL6U4VTTPIbfkQgnN9DopJycluRAE2cVGZ49Du6QLAjVI+cjcUHmNwulJ11WdUJZVAO36oqOpJtqqdh4wRcROYdaMKmroyER70lPJmOpURPxXoUVMTmK3+kNlflF1DHK1zrErp/BoSHwiLOSnQxzgNy5RuSJ+kG3//2Q=="
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"50%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Home & LifeStyle
            </Text>
            <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Furniture & Decore</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Spots Hobbies & Fashion</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Luggages</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >FootWear</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >HouseHold Items</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
            </SimpleGrid>

          </Box>
          <Box height="370px" backgroundColor={"white"}>
            <Image
              width={"100%"}
              height={"25%"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoqohWZvP0eBN_l7yi6HyVZ6mHH9fC5h2VQ&usqp=CAU"
            />
            <Text
              position={"absolute"}
              top={"63%"}
              left={"80%"}
              color={"white"}
              transform={"translate(-50%, -50%)"}
            >
              Electronics & Applicance
            </Text>
            <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Laptop & Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >TV-DVD -multimedia</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Camera Accessories</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Home Applicance</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >Kitchen Applicance</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
              <SimpleGrid width={"95%"} margin={"auto"} borderBottom={"1px solid gray"} display={"flex"} justifyContent={"space-between"} paddingBottom={"10px"}  paddingTop={"10px"}>
                <Box >View All</Box>
                <Box>&gt;</Box>
              </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
SHOWS
Movie       Language        Box office collection
ABC         A               100
DEF         B               50
GHI         A               75
JKL         B               90
MNO         C               125

Aggregations - forming groups of records (documents) on some basis, and forming an aggegate value
Example: Group by "language" (criteria), and "Sum" up the box office collection in every group

Movie       Language        Box office collection
ABC         A               100
GHI         A                75
                            ---
                            175

DEF         B               50
JKL         B               90
                            ---
                           140

MNO         C               125
                            ---
                            125


Language    Total_box_office_collection     num_movies      movies
A           175                             2               [ "ABC", "GHI" ]
B           140                             2               [ "DEF", "JKL" ]
C           125                             1               [ "MNO" ]

Language    Total_box_office_collection     num_movies
A           175                             2
B           140                             2
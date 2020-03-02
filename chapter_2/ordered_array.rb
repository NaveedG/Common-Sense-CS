# Use your favorite object-oriented programming language to create a class that represents an ordered array. 
# It should include functions/methods that serve as the key operations: Read, search, insert, and delete. 
# Ensure that the insert operation inserts the value in the correct place within the ordered array.

class OrderedArray
  def initialize(array)
    @array = array.sort
  end
end